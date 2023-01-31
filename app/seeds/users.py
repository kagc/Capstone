from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    
    bean = User(
        username='bean', email='bean@bean.com', password='password')
    
    bbcat = User(
        username='bbcat', email='bb@cat.com', password='password')
    
    a_cat = User(
        username='a_cat', email='a@cat.com', password='password')
    
    not_a_cat = User(
        username = 'not_a_cat', email = 'not@cat.com', password='password'
    )
    
    a_dog = User(
        username='a_dog', email='a@dog.com', password='password')
    
    idk = User(
        username='xXc001_p3r50nXx', email='1@1.com', password='password')
    
    miss_match = User(
        username='miss_match', email='match@miss.com', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(bean)
    db.session.add(bbcat)
    db.session.add(a_cat)
    db.session.add(not_a_cat)
    db.session.add(a_dog)
    db.session.add(idk)
    db.session.add(miss_match)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")
        
    db.session.commit()