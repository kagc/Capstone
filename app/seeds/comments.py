from datetime import datetime
from app.models import db, Comment, environment, SCHEMA

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
    # comment1 = Comment(
    #     projectId = 1,
    #     userId = 1,
    #     comment = "Wow, super cool thanks."
    # )
    # comment1 = Comment(
    #     projectId = 1,
    #     userId = 1,
    #     comment = "Wow, super cool thanks."
    # )
    # comment1 = Comment(
    #     projectId = 1,
    #     userId = 1,
    #     comment = "Wow, super cool thanks."
    # )
    # comment1 = Comment(
    #     projectId = 1,
    #     userId = 1,
    #     comment = "Wow, super cool thanks."
    # )
    # comment1 = Comment(
    #     projectId = 1,
    #     userId = 1,
    #     comment = "Wow, super cool thanks."
    # )
    # comment1 = Comment(
    #     projectId = 1,
    #     userId = 1,
    #     comment = "Wow, super cool thanks."
    # )
    
    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.commit()
    
def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()