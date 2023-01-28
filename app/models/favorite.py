from .db import db, environment, SCHEMA, add_prefix_for_prod

class Favorite(db.Model):
    __tablename__ = 'favorites'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    projectId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod(("projects.id"))))
    
    project = db.relationship("Project", back_populates="favorites")
    user = db.relationship("User", back_populates="favorites")
    
    def to_dict_favorite(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'projectId': self.projectId
        }