from datetime import datetime
from app.models import db, Answer, environment, SCHEMA

def seed_answers():
    answer1 = Answer(
        projectId = 1,
        userId = 1,
        questionId = 3,
        answer = "MEOWMEOWMOEOWMEOW.",
        created_at = datetime(2023, 2, 1, 12, 30)
    )
    
    answer2 = Answer(
        questionId = 1,
        userId = 2,
        projectId = 5,
        answer = "You can find the supplies at almost any store online that sells things, unless they don't have the supplies in stock.",
        created_at = datetime(2023, 2, 1, 12, 30)
    )
    
    db.session.add(answer1)
    db.session.add(answer2)
    db.session.commit()

def undo_answers():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.answers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM answers")

    db.session.commit()