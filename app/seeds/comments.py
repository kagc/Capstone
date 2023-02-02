from datetime import datetime
from app.models import db, Comment, environment, SCHEMA
from faker import Faker
fake = Faker()

def seed_comments():
    comment1 = Comment(
        projectId = 1,
        userId = 1,
        comment = "Wow, super cool thanks.",
        created_at = datetime(2023, 1, 28, 12, 00)
    )
    comment2 = Comment(
        projectId = 1,
        userId = 2,
        comment = "I don't understand.",
        created_at = datetime(2023, 1, 29, 12, 00)
    )
    comment3 = Comment(
        projectId = 1,
        userId = 3,
        comment = "Directions unclear. Cat bit me. :(",
        created_at = datetime(2023, 1, 29, 12, 30)
    )
    comment4 = Comment(
        projectId = 1,
        userId = 1,
        comment = "Oh dang.",
        created_at = datetime(2023, 1, 29, 12, 45)
    )
    
    comment5 = Comment(
        projectId = 5,
        userId = 4,
        comment = fake.text(),
        created_at = datetime(2023, 1, 29, 12, 45)
    )
    comment6 = Comment(
        projectId = 6,
        userId = 5,
        comment = fake.text(),
        created_at = datetime(2023, 1, 29, 12, 45)
    )
    comment7 = Comment(
        projectId = 7,
        userId = 6,
        comment = fake.text(),
        created_at = datetime(2023, 1, 29, 12, 45)
    )
    comment8 = Comment(
        projectId = 8,
        userId = 7,
        comment = fake.text(),
        created_at = datetime(2023, 1, 29, 12, 45)
    )
    comment9 = Comment(
        projectId = 9,
        userId = 8,
        comment = fake.text(),
        created_at = datetime(2023, 1, 29, 12, 45)
    )
    comment10 = Comment(
        projectId = 10,
        userId = 10,
        comment = fake.text(),
        created_at = datetime(2023, 1, 29, 12, 45)
    )
    
    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.commit()
    
def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()