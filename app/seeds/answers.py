from datetime import datetime
from app.models import db, Answer, environment, SCHEMA
from faker import Faker
fake = Faker()

def seed_answers():
    answer1 = Answer(
        questionId = 3,
        projectId = 1,
        userId = 1,
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
    
    answer3 = Answer(
        questionId = 2,
        userId = 2,
        projectId = 4,
        answer = fake.text(),
        created_at = datetime(2023, 2, 1, 12, 30)
    )
    
    answer4 = Answer(
        questionId = 4,
        userId = 2,
        projectId = 2,
        answer = fake.text(),
        created_at = datetime(2023, 2, 1, 12, 30)
    )
    
    answer5 = Answer(
        questionId = 5,
        userId = 2,
        projectId = 1,
        answer = fake.text(),
        created_at = datetime(2023, 2, 1, 12, 30)
    )
    
    answer6 = Answer(
        questionId = 6,
        userId = 2,
        projectId = 6,
        answer = fake.text(),
        created_at = datetime(2023, 2, 1, 12, 30)
    )
    
    db.session.add(answer1)
    db.session.add(answer2)
    db.session.add(answer3)
    db.session.add(answer4)
    db.session.add(answer5)
    db.session.add(answer6)
    db.session.commit()

def undo_answers():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.answers RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM answers")

    db.session.commit()