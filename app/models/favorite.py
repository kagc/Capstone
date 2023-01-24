from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from .project import Project

class Favorite(db.Model):
    __tablename__ = 'favorites'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    projectId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("projects.id")), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    
    project = db.relationship("Project", back_populates="comments")
    user = db.relationship("User", back_populates="comments")
    
    def to_dict_fav(self):
        return {
            'id': self.id,
            'projectId': self.projectId,
            'userId': self.userId
        }