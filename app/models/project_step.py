from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user import User

class ProjectStep(db.Model):
    __tablename__ = 'project_steps'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    projectId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("projects.id")), nullable=False)
    stepNum = db.Column(db.Integer, nullable=False)
    stepTitle = db.Column(db.String(40), nullable=False)
    stepDescription = db.Column(db.String(255), nullable=False)
    
    stepImageUrl = db.Column(db.String(1000))
    
    project = db.relationship("Project", back_populates="steps")
    
    def to_dict_step(self):
        return {
            'id': self.id,
            'projectId': self.projectId,
            'stepNum': self.stepNum,
            'stepTitle': self.stepTitle,
            'stepDescription': self.stepDescription,
            'stepImageUrl': self.stepImageUrl,
        }