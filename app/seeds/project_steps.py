from app.models import db, Project, environment, SCHEMA
from app.models.project_step import ProjectStep

def seed_project_steps():
    p1step1 = ProjectStep(
        projectId = 1,
        stepNum = 1,
        stepTitle = "First step to petting a cat",
        stepDescription = "Make sure cat wants to be pet. Check for signs of aggression. If the cat is hissing, do not engage. If cat looks chill, move on to step 2."
    )
    p1step2 = ProjectStep(
        projectId = 1,
        stepNum = 2,
        stepTitle = "Second step to petting a cat",
        stepDescription = "Lift hand."
    )
    
    p1step3 = ProjectStep(
        projectId = 1,
        stepNum = 3,
        stepTitle = "Third step to petting a cat",
        stepDescription = "Pet cat. Wow, you did it!"
    )
    
    db.session.add(p1step1)
    db.session.add(p1step2)
    db.session.add(p1step3)
    
    db.session.commit()
    
def undo_project_steps():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.project_steps RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM project_steps")

    db.session.commit()