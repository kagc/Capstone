from flask import Blueprint, redirect, request
from flask_login import login_required,current_user
from ..models import db, Project, User
from app.forms import ProjectForm
from .auth_routes import validation_errors_to_error_messages

project_routes = Blueprint('projects', __name__)

#Get all project instruction data
@project_routes.route('')
def all_projects():
    return {"Projects": [project.to_dict_project() for project in Project.query.all()]}

#Get all projects by current user
@project_routes.route('/current')
@login_required
def all_current_projects():
    currentId = current_user.get_id()
    return {"Projects": [project.to_dict_project() for project in Project.query.all() if int(project.creatorId) == int(currentId)]}

#Get single project instruction data by id
@project_routes.route('/<int:id>')
def single_project(id):
    project = Project.query.get(id)
    if project:
        return project.to_dict_project()
    return {
        'message': 'Error',
        'errors': ["Project instructions couldn't be found"],
        'statusCode': 404
    }, 404
    
#Create a project instruction page
@project_routes.route('', methods=['POST'])
@login_required
def create_project():
    form = ProjectForm()
    # sForm = ProjectStepForm()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    
    currentId = current_user.get_id()
    
    if form.validate_on_submit():
        new_project = Project(creatorId = currentId)
        form.populate_obj(new_project)
        db.session.add(new_project)
        db.session.commit()
        return new_project.to_dict_project(), 201
    
    return {
        'message': 'Validation Error',
        "errors": validation_errors_to_error_messages(form.errors),
        'statusCode': 400
    }, 400
    
#Edit a project instruction page
@project_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_project(id):
    form = ProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    project = Project.query.get(id)
    
    if not project:
        return {
            'message': 'Error',
            'errors': ['Project Instructions couldn`t be found'],
            'statusCode': 404,
        }, 404
        
    currentId = current_user.get_id()
    if int(project.creatorId) != int(currentId):
        return {
            'message': 'Forbidden',
            'errors': ['This project does not belong to the current user.'],
            'statusCode': 403
        }, 403
        
    if form.validate_on_submit():
        form.populate_obj(project)
        db.session.add(project)
        db.session.commit()
        return project.to_dict_project()
    
    return {
        'message': 'Validation Error',
        'errors': validation_errors_to_error_messages(form.errors),
        'statusCode': 400
    }, 400
    
#Delete a project
@project_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_project(id):
    project = Project.query.get(id)
    
    if not project:
        return {
            'message': 'Error',
            'errors': ['Project couldn`t be found'],
            'statusCode': 404
        }, 404
        
    currentId = current_user.get_id()
    
    if int(project.creatorId) != int(currentId):
        return {
            'message': 'Forbidden',
            'errors': ['This project does not belong to the current user.'],
            'statusCode': 403
        }, 403
        
    db.session.delete(project)
    db.session.commit()
    
    return {
        "message": "Project instructions successfully deleted.",
        'statusCode': 200
    }, 200