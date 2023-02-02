from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User
from .project_step import ProjectStep
from datetime import datetime

class Project(db.Model):
    __tablename__ = 'projects'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    creatorId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(255), nullable=False)
    coverImageUrl = db.Column(db.String(1000), nullable=False)
    intro = db.Column(db.String(2000), nullable=False)
    supplies = db.Column(db.String(2000), nullable=False)
    
    created_at = db.Column(db.DateTime, default=datetime.now())
    
    user = db.relationship("User", back_populates="projects")
    steps = db.relationship("ProjectStep", back_populates="project", cascade="all, delete")
    favorites = db.relationship("Favorite", back_populates="project", cascade="all, delete")
    comments = db.relationship("Comment", back_populates="project", cascade="all, delete")
    questions = db.relationship("Question", back_populates='project', cascade="all, delete")
    answers = db.relationship("Answer", back_populates="project", cascade="all, delete")
    
    def to_dict_project(self):
        return {
            'id': self.id,
            'creatorId': self.creatorId,
            'title': self.title,
            'category': self.category,
            'coverImageUrl': self.coverImageUrl,
            'intro': self.intro,
            'supplies': self.supplies,
            'created_at': self.created_at,
            'creator': User.query.get(self.creatorId).to_dict(),
            'steps': [step.to_dict_step() for step in ProjectStep.query.all() if int(step.projectId) == int(self.id)]
        }
        
    def to_dict_project_title(self):
        return {
            'title': self.title
        }