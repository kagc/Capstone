from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from datetime import datetime

class Answer(db.Model):
    __tablename__ = 'answers'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    projectId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("projects.id")), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    questionId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod(("questions.id"))))
    answer = db.Column(db.String(1000), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    
    question =db.relationship("Question", back_populates="answers")
    project = db.relationship("Project", back_populates="answers")
    user = db.relationship("User", back_populates="answers")
    
    def to_dict_answer(self):
        return {
            'id': self.id,
            'projectId': self.projectId,
            'userId': self.userId,
            'questionId': self.questionId,
            'answer': self.answer,
            'created_at': self.created_at,
            'userInfo': User.query.get(self.userId).to_dict()
        }