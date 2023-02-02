from datetime import datetime
from app.models import db, Question, environment, SCHEMA
from faker import Faker
fake = Faker()

def seed_questions():
    question1 = Question(
        projectId = 5,
        userId = 1,
        question = "Where do I get the supplies at?",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    question2 = Question(
        projectId = 4,
        userId = 2,
        question = "What were electric eels called before electricity was discovered?",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    question3 = Question(
        projectId = 1,
        userId = 3,
        question = "Can you explain in cat terms?",
        created_at = datetime(2023, 1, 31, 12, 30)
    )
    question4 = Question(
        projectId = 2,
        userId = 4,
        question = "Has anyone really been far even as decided to use even go want to do look more like?",
        created_at = datetime(2023, 1, 31, 12, 45)
    )
    question5 = Question(
        projectId = 1,
        userId = 4,
        question = "Can I substitute the supplies with cat hair and whiskers?",
        created_at = datetime(2023, 1, 31, 12, 45)
    )
    
    question6 = Question(
        projectId = 6,
        userId = 4,
        question = fake.text(),
        created_at = datetime(2023, 1, 31, 12, 45)
    )
    
    question7 = Question(
        projectId = 7,
        userId = 4,
        question = fake.text(),
        created_at = datetime(2023, 1, 31, 12, 45)
    )
    
    question8 = Question(
        projectId = 8,
        userId = 4,
        question = fake.text(),
        created_at = datetime(2023, 1, 31, 12, 45)
    )
    
    question9 = Question(
        projectId = 9,
        userId = 4,
        question = fake.text(),
        created_at = datetime(2023, 1, 31, 12, 45)
    )
    
    question10 = Question(
        projectId = 10,
        userId = 4,
        question = fake.text(),
        created_at = datetime(2023, 1, 31, 12, 45)
    )
    
    db.session.add(question1)
    db.session.add(question2)
    db.session.add(question3)
    db.session.add(question4)
    db.session.add(question5)
    
    db.session.add(question6)
    db.session.add(question7)
    db.session.add(question8)
    db.session.add(question9)
    db.session.add(question10)
    db.session.commit()

def undo_questions():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.questions RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM questions")

    db.session.commit()