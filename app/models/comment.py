from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from datetime import datetime

class Comment(db.Model):
    __tablename__ = 'comments'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    projectId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("projects.id")), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    comment = db.Column(db.String(1000), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    
    project = db.relationship("Project", back_populates="comments")
    user = db.relationship("User", back_populates="comments")
    
    
    def to_dict_comment(self):
        # if created_at is not None:
        #     self.created_at = created_at
        return {
            'id': self.id,
            'projectId': self.projectId,
            'userId': self.userId,
            'comment': self.comment,
            'created_at': self.created_at,
            'userInfo': User.query.get(self.userId).to_dict()
        }