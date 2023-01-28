from .db import db, environment, SCHEMA, add_prefix_for_prod
from .project import Project
from .user import User

class Favorite(db.Model):
    __tablename__ = 'favorites'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    projectId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod(("projects.id"))), nullable=False)
    
    project = db.relationship("Project", back_populates="favorites")
    user = db.relationship("User", back_populates="favorites")
    
    def to_dict_favorite(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'projectId': self.projectId,
            'user': User.query.get(self.userId).to_dict(),
            'project': Project.query.get(self.projectId).to_dict_project_title()
        }