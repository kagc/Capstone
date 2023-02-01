from flask import Blueprint, redirect, request
from flask_login import login_required,current_user
from ..models import db, Project, User, Question
from app.forms import QuestionForm
from .auth_routes import validation_errors_to_error_messages

question_routes = Blueprint('questions', __name__)

#Get all questions by current user
@question_routes.route('/questions/current')
@login_required
def user_questions():
    currentId = current_user.get_id()
    return {"Questions": [question.to_dict_question() for question in Question.query.filter(Question.userId == currentId).all()]}

#Get all questions by project direction page Id
@question_routes.route('/projects/<int:projectId>/questions')
def project_questions(projectId):
    return {"Questions": [question.to_dict_question() for question in Question.query.filter(Question.projectId == projectId).all()]}

#Create a question
@question_routes.route('/projects/<int:projectId>/questions', methods=['POST'])
@login_required
def create_question(projectId):
    form = QuestionForm()
    
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
        new_question = Question()
        form.populate_obj(new_question)
        new_question.projectId = projectId
        new_question.userId = currentId
        
        db.session.add(new_question)
        db.session.commit()
        
        return new_question.to_dict_question()
        
    if form.errors:
        return {
            "message": "Validation Error",
            "errors":validation_errors_to_error_messages(form.errors),
            "statusCode": 400,
        }, 400
        
#Edit a question
@question_routes.route('/questions/<int:questionId>', methods=['PUT'])
@login_required
def edit_question(questionId):
    form = QuestionForm()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    
    question = Question.query.get(questionId)
    if not question:
        return {
            'message': 'Error',
            'errors': ['That question couldn`t be found'],
            'statusCode': 404,
        }, 404
    
    currentId = current_user.get_id()
    if (int(question.userId) != int(currentId)):
        return {
            'message': 'Forbidden',
            'errors': ['This question does not belong to the current user.'],
            'statusCode': 403
        }, 403
    
    if form.validate_on_submit():
        form.populate_obj(question)
        db.session.add(question)
        db.session.commit()
        return question.to_dict_question()
    
    if form.errors:
        return {
            'message': 'Validation Error',
            'errors': validation_errors_to_error_messages(form.errors),
            'statusCode': 400
        }, 400
        
#Delete a question
@question_routes.route('/questions/<int:questionId>', methods=['DELETE'])
@login_required
def delete_question(questionId):
    question = Question.query.get(questionId)
    
    if not question:
        return {
            'message': 'Error',
            'errors': ['Question couldn`t be found'],
            'statusCode': 404
        }, 404
        
    currentId = current_user.get_id()
    if (int(question.userId) != int(currentId)):
        return {
            'message': 'Forbidden',
            'errors': ['This question does not belong to the current user.'],
            'statusCode': 403
        }, 403
        
    db.session.delete(question)
    db.session.commit()
    
    return {
        "id": questionId,
        "message": "Question successfully deleted.",
        'statusCode': 200
    }, 200
    