from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from .project import Project

class Question(db.Model):
    __tablename__ = 'questions'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    projectId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("projects.id")), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    question = db.Column(db.String(255), nullable=False)
    
    def to_dict_question(self):
        return {
            'id': self.id,
            'projectId': self.projectId,
            'userId': self.userId,
            'question': self.question,
            'userInfo': User.query.get(self.userId).to_dict()
        }