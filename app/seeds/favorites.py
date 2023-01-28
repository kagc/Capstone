from app.models import db, Favorite, environment, SCHEMA

def seed_favorites():
    fav1 = Favorite(
        userId = 1,
        projectId = 1
    )
    
    fav2 = Favorite(
        userId = 1,
        projectId = 2
    )
    
    fav3 = Favorite(
        userId = 1,
        projectId = 3
    )
    
    fav4 = Favorite(
        userId = 1,
        projectId = 4
    )
    
    fav5 = Favorite(
        userId = 2,
        projectId = 1
    )
    
    fav6 = Favorite(
        userId = 2,
        projectId = 2
    )
    
    fav7 = Favorite(
        userId = 2,
        projectId = 3
    )
    
    fav8 = Favorite(
        userId = 3,
        projectId = 1
    )
    
    fav9 = Favorite(
        userId = 3,
        projectId = 2
    )
    
    fav10 = Favorite(
        userId = 3,
        projectId = 4
    )
    
    fav11 = Favorite(
        userId = 3,
        projectId = 5
    )
    
    fav12 = Favorite(
        userId = 3,
        projectId = 6
    )
    
    fav13 = Favorite(
        userId = 3,
        projectId = 7
    )
    
    fav14 = Favorite(
        userId = 3,
        projectId = 8
    )
    
    db.session.add(fav1)
    db.session.add(fav2)
    db.session.add(fav3)
    db.session.add(fav4)
    db.session.add(fav5)
    db.session.add(fav6)
    db.session.add(fav7)
    db.session.add(fav8)
    db.session.add(fav9)
    db.session.add(fav10)
    db.session.add(fav11)
    db.session.add(fav12)
    db.session.add(fav13)
    db.session.add(fav14)
    
    db.session.commit()
    
def undo_favorites():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.favorites RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM favorites")

    db.session.commit()