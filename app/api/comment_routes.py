from flask import Blueprint, redirect, request
from flask_login import login_required,current_user
from ..models import db, Project, User, Comment
from app.forms import CommentForm
from .auth_routes import validation_errors_to_error_messages

comment_routes = Blueprint('comments', __name__)

#Get all comments by current user
@comment_routes.route('/comments/current')
@login_required
def user_comments():
    currentId = current_user.get_id()
    return {"Comments": [comment.to_dict_comment() for comment in Comment.query.filter(Comment.userId == currentId).all()]}

#Get all comments by project instruction page Id
@comment_routes.route('/projects/<int:projectId>/comments')
def project_comments(projectId):
    return {"Comments": [comment.to_dict_comment() for comment in Comment.query.filter(Comment.projectId == projectId).all()]}

#Create a comment
@comment_routes.route('/projects/<int:projectId>/comments', methods=['POST'])
@login_required
def create_comment(projectId):
    form = CommentForm()
    
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
        new_comment = Comment()
        form.populate_obj(new_comment)
        new_comment.projectId = projectId
        new_comment.userId = currentId
        
        db.session.add(new_comment)
        db.session.commit()
        
        return new_comment.to_dict_comment()
        
    if form.errors:
        return {
            "message": "Validation Error",
            "errors":validation_errors_to_error_messages(form.errors),
            "statusCode": 400,
        }, 400
        
#Edit a comment
@comment_routes.route('/comments/<int:commentId>', methods=['PUT'])
@login_required
def edit_comment(commentId):
    form = CommentForm()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    
    comment = Comment.query.get(commentId)
    if not comment:
        return {
            'message': 'Error',
            'errors': ['That comment couldn`t be found'],
            'statusCode': 404,
        }, 404
    
    currentId = current_user.get_id()
    if (int(comment.userId) != int(currentId)):
        return {
            'message': 'Forbidden',
            'errors': ['This comment does not belong to the current user.'],
            'statusCode': 403
        }, 403
    
    if form.validate_on_submit():
        form.populate_obj(comment)
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict_comment()
    
    if form.errors:
        return {
            'message': 'Validation Error',
            'errors': validation_errors_to_error_messages(form.errors),
            'statusCode': 400
        }, 400
    
#Delete a comment
@comment_routes.route('/comments/<int:commentId>', methods=['DELETE'])
@login_required
def delete_comment(commentId):
    comment = Comment.query.get(commentId)
    
    if not comment:
        return {
            'message': 'Error',
            'errors': ['Comment couldn`t be found'],
            'statusCode': 404
        }, 404
        
    currentId = current_user.get_id()
    if (int(comment.userId) != int(currentId)):
        return {
            'message': 'Forbidden',
            'errors': ['This comment does not belong to the current user.'],
            'statusCode': 403
        }, 403
        
    db.session.delete(comment)
    db.session.commit()
    
    return {
        "id": commentId,
        "message": "Comment successfully deleted.",
        'statusCode': 200
    }, 200
    