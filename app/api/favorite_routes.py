from flask import Blueprint, redirect, request
from flask_login import login_required,current_user
from app.forms.favorite_form import FavoriteForm
from ..models import db, Project, Favorite
from .auth_routes import validation_errors_to_error_messages

favorite_routes = Blueprint('favorites', __name__)

#Get all favorites by current user
@favorite_routes.route('/favorites/current')
@login_required()
def user_favorites():
    currentId = current_user.get_id()
    return {"Favorites": [favorite.to_dict_favorite() for favorite in Favorite.query.filter(Favorite.userId == currentId).all()]}

#Get all favorites by project direction page Id
@favorite_routes.route('/projects/<int:projectId>/favorites')
def project_favorites(projectId):
    return {"Favorites": [favorite.to_dict_favorite() for favorite in Favorite.query.filter(Favorite.projectId == projectId).all()]}

#Create a favorite
@favorite_routes.route('/projects/<int:projectId>/favorites', methods=['POST'])
@login_required()
def create_favorite(projectId):
    form = FavoriteForm()
    
    currentId = current_user.get_id()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    
    project = Project.query.get(projectId)
    if not project:
        return {
           'message':'HTTP Error',
           "errors":["Project couldn't be found"],
           'statusCode': 404
           }, 404
        
    if form.validate_on_submit():
        new_favorite = Favorite()
        form.populate_obj(new_favorite)
        new_favorite.userId = currentId
        
        db.session.add(new_favorite)
        db.session.commit()
        
        return new_favorite.to_dict_favorite()
    
    if form.errors:
        return {
            "message": "Validation Error",
            "errors":validation_errors_to_error_messages(form.errors),
            "statusCode": 400,
        }, 400
        
#Delete a favorite
@favorite_routes.route('/favorites/<int:favoriteId>', methods=['DELETE'])
@login_required()
def delete_favorite(favoriteId):
    favorite = Favorite.query.get(favoriteId)
    
    if not favorite:
        return {
            'message': 'Error',
            'errors': ['Comment couldn`t be found'],
            'statusCode': 404
        }, 404
        
    currentId = current_user.get_id()
    if (int(favorite.userId) != int(currentId)):
        return {
            'message': 'Forbidden',
            'errors': ['This favorite does not belong to the current user.'],
            'statusCode': 403
        }, 403
        
    db.session.delete(favorite)
    db.session.commit()
    
    return {
        "id": favoriteId,
        "message": "Favorite successfully deleted",
        "statusCode": 200,
    }, 200