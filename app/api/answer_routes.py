from app.models import answer
from flask import Blueprint, redirect, request
from flask_login import login_required,current_user
from ..models import db, Project, User, Question, Answer
from app.forms import AnswerForm
from .auth_routes import validation_errors_to_error_messages

answer_routes = Blueprint('answers', __name__)

#GET ALL ANSWERS BY CURRENT USER
@answer_routes.route('/answers/current')
@login_required
def user_answers():
    currentId = current_user.get_id()
    return {"Answers": [answer.to_dict_answer() for answer in Answer.query.filter(Answer.userId == currentId).all()]}

#GET ALL ANSWERS BY PROJECT DIRECTION PAGE ID
@answer_routes.route('/projects/<int:projectId>/answers')
def project_answers(projectId):
    return {"Answers": [answer.to_dict_answer() for answer in Answer.query.filter(Question.projectId == projectId).all()]}

#GET ALL ANSWERS BY QUESTION ID
@answer_routes.route('/questions/<int:questionId>/answers')
def question_answers(questionId):
    return {"Answers": [answer.to_dict_answer() for answer in Answer.query.filter(Answer.questionId == questionId).all()]}

#CREATE AN ANSWER
@answer_routes.route('/questions/<int:questionId>/answers', methods=['POST'])
@login_required
def create_answer(questionId):
    form = AnswerForm()
    
    currentId = current_user.get_id()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    
    question = Question.query.get(questionId)
    if not question:
        return {
            'message':'HTTP Error',
           "errors":["Answer couldn't be found"],
           'statusCode': 404
           }, 404
        
    if form.validate_on_submit():
        new_answer = Answer()
        form.populate_obj(new_answer)
        new_answer.projectId = question.projectId
        new_answer.questionId = questionId
        new_answer.userId = currentId
        
        db.session.add(new_answer)
        db.session.commit()
        
        updatedQuestion = Question.query.get(questionId)
        return updatedQuestion.to_dict_question(), 200
        # return new_answer.to_dict_answer()
    
    if form.errors:
        return {
            "message": "Validation Error",
            "errors":validation_errors_to_error_messages(form.errors),
            "statusCode": 400,
        }, 400
        
#EDIT AN ANSWER
@answer_routes.route("/answers/<int:answerId>", methods=['PUT'])
@login_required
def edit_answer(answerId):
    form = AnswerForm()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    
    answer = Answer.query.get(answerId)
    if not answer:
        return {
            'message': 'Error',
            'errors': ['That answer couldn`t be found'],
            'statusCode': 404,
        }, 404
        
    if form.validate_on_submit():
        form.populate_obj(answer)
        db.session.add(answer)
        db.session.commit()
        
        updatedQuestion = Question.query.get(answer.questionId)
        return updatedQuestion.to_dict_question(), 200
        # return answer.to_dict_answer()
    
    if form.errors:
        return {
            'message': 'Validation Error',
            'errors': validation_errors_to_error_messages(form.errors),
            'statusCode': 400
        }, 400
        
#DELETE AN ANSWER
@answer_routes.route("/answers/<int:answerId>", methods=["DELETE"])
@login_required
def delete_answer(answerId):
    answer = Answer.query.get(answerId)
    
    if not answer:
        return {
            'message': 'Error',
            'errors': ['Answer couldn`t be found'],
            'statusCode': 404
        }, 404
        
    questionId = answer.questionId
        
    currentId = current_user.get_id()
    if (int(answer.userId) != int(currentId)):
        return {
            'message': 'Forbidden',
            'errors': ['This answer does not belong to the current user.'],
            'statusCode': 403
        }, 403
        
    db.session.delete(answer)
    db.session.commit()
    
    updatedQuestion = Question.query.get(questionId)
    return updatedQuestion.to_dict_question(), 200
    
    # return {
    #     "id": questionId,
    #     "message": "Answer successfully deleted.",
    #     'statusCode': 200
    # }, 200
    