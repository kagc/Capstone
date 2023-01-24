from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from .project import Project

class Comment(db.Model):
    __tablename__ = 'comments'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    projectId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("projects.id")), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    comment = db.Column(db.String(255), nullable=False)
    
    project = db.relationship("Project", back_populates="comments")
    user = db.relationship("User", back_populates="comments")
    
    
    def to_dict_comment(self):
        return {
            'id': self.id,
            'projectId': self.projectId,
            'userId': self.userId,
            'comment': self.comment,
            'userInfo': User.query.get(self.userId).to_dict()
        }