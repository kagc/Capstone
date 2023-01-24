from app.models import db, Project, environment, SCHEMA

def seed_projects():
    project1 = Project(
        creatorId = 1,
        title = "How To Pet a Cat",
        category = 'Living',
        coverImageUrl = "https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/0f3b6a5f-b532-4e79-b269-97176929ce54/article-grooming-your-cat.jpg",
        intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        supplies = "1 hand, 1 cat"
    )
    
    db.session.add(project1)
    db.session.commit()
    
def undo_projects():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.projects RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM projects")

    db.session.commit()