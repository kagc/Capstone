from flask import Blueprint, redirect, request
from flask_login import login_required,current_user
from ..models import db, Project, User, ProjectStep
from app.forms import StepForm 
from .auth_routes import authenticate, validation_errors_to_error_messages

project_step_route = Blueprint('project_steps', __name__)

#Create a project step
@project_step_route.route('/projects/<int:projectId>/steps', methods=['POST'])
@login_required
def create_step(projectId):
    form = StepForm()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    
    project = Project.query.get(projectId)
    if not project:
        return {
            'message': 'Error',
            'errors': ['Project couldn`t be found'],
            'statusCode': 404
        }, 404
        
    if authenticate()['id'] == project.creatorId:
        if form.validate_on_submit():
            new_step = ProjectStep()
            form.populate_obj(new_step)
            new_step.projectId = projectId
            
            db.session.add(new_step)
            db.session.commit()
            updatedProject = Project.query.get(projectId)
            return updatedProject.to_dict_project(), 200
        
    if form.errors:
        return {
            "message": "Validation Error",
                "errors":validation_errors_to_error_messages(form.errors),
                "statusCode": 400,
        }, 400
        
    else:
        return {
            "message": "Forbidden Error",
            'errors': ['This project does not belong to the current user.'],
            "statusCode": 403
        }, 403
        
#Update a step
@project_step_route.route('/steps/<int:stepId>', methods=['PUT'])
@login_required
def update_step(stepId):
    form = StepForm()
    
    step = ProjectStep.query.get(stepId)
    
    if not step:
        return {
            'message': 'Error',
            'errors': ['Could not find that specific step'],
            'statusCode': 403
        }, 403
        
    form['csrf_token'].data = request.cookies['csrf_token']
    
    project = Project.query.get(step.projectId)
    if not project:
        return {
            'message': 'Error',
            'errors': ['That specific step is not a part of those instructions.'],
            'statusCode': 404
        }, 404
        
    if authenticate()['id'] == project.creatorId:
        if form.validate_on_submit():
            form.populate_obj(step)
            db.session.add(step)
            db.session.commit()
            return step.to_dict_step()
        
    if form.errors:
        return {
            "message": "Validation erorr",
            "errors":validation_errors_to_error_messages(form.errors),
            "statusCode": 400
        }, 400
        
    else:
        return {
            'message': 'Forbidden',
            'errors': ['This project does not belong to the current user.'],
            'statusCode': 403
        }, 403
        
#Delete a step
@project_step_route.route('/steps/<int:stepId>', methods=['DELETE'])
@login_required
def delete_step(stepId):
    step = ProjectStep.query.get(stepId)
    
    if not step:
        return {
            'message':'HTTP Error',
            "errors":["Could not find that specific step"],
            'statusCode': 404
            },404
        
    project = Project.query.get(step.projectId)
    if not project:
        return {
            'message': 'Error',
            'errors': ['That specific step is not a part of those instructions.'],
            'statusCode': 404
        }, 404
        
    if int(authenticate()['id']) == int(project.creatorId):
        db.session.delete(step)
        db.session.commit()
        updatedProject = Project.query.get(step.projectId)
        return updatedProject.to_dict_project(), 200
        # return {
        #     "message": "Step successfully deleted",
        #     "statusCode": 200
        # }, 200
        
    else:
        return {
            "message": "Forbidden Error",
            'errors': ['This project does not belong to the current user.'],
            "statusCode": 403
        }, 403