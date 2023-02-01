from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from datetime import datetime

class Question(db.Model):
    __tablename__ = 'questions'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    projectId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("projects.id")), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    question = db.Column(db.String(1000), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    
    # answered = db.Column(db.Boolean, default=False)
    
    project = db.relationship("Project", back_populates="questions")
    user = db.relationship("User", back_populates="questions")
    
    def to_dict_question(self):
        return {
            'id': self.id,
            'projectId': self.projectId,
            'userId': self.userId,
            'question': self.question,
            'created_at': self.created_at,
            'userInfo': User.query.get(self.userId).to_dict()
        }