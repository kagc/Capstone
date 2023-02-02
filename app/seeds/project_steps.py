from app.models import db, Project, environment, SCHEMA
from app.models.project_step import ProjectStep
from faker import Faker
fake = Faker()

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
    
    p2step1 = ProjectStep(
        projectId = 2,
        stepNum = 1,
        stepTitle = "Flex diaphragm",
        stepDescription = "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
    )
    p2step2 = ProjectStep(
        projectId = 2,
        stepNum = 2,
        stepTitle = "Wait a second",
        stepDescription = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    )
    p2step3 = ProjectStep(
        projectId = 2,
        stepNum = 3,
        stepTitle = "Relax diaphragm",
        stepDescription = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth"
    )
    p2step4 = ProjectStep(
        projectId = 2,
        stepNum = 4,
        stepTitle = "Repeat",
        stepDescription = "You did it! Now do it again, repeatedly, for the duration of your living existence. Good work!"
    )
    
    p3step1 = ProjectStep(
        projectId = 3,
        stepNum = 1,
        stepTitle = "First and ONLY step",
        stepDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet bibendum turpis vel porta. Cras eleifend cursus maximus. Cras volutpat metus nulla, nec iaculis ante consectetur et. Vestibulum eu vehicula est."
    )
    
    p4step1 = ProjectStep(
        projectId = 4,
        stepNum = 1,
        stepTitle = "sed, consectetur nunc",
        stepDescription = "Quisque efficitur sapien sed libero pulvinar efficitur. Vivamus tempus tempor malesuada. Nunc maximus felis nec elit eleifend dignissim. Aenean vulputate magna ut commodo venenatis. ."
    )
    
    p4step2 = ProjectStep(
        projectId = 4,
        stepNum = 2,
        stepTitle = "Cras lobortis leo in faucibus consecte",
        stepDescription = "Morbi sagittis eleifend est et vehicula. "
    )
    
    p5step1 = ProjectStep(
        projectId = 5,
        stepNum = 1,
        stepTitle = "Etiam eu facilisis justo",
        stepDescription = "Proin vel magna leo. Integer sed tortor in leo pulvinar placerat eget id elit. Suspendisse sapien urna, rhoncus eu maximus quis, ultricies quis ligula. Vivamus id sem id felis ultrices vehicula sollicitudin eget est."
    )
    
    p5step2 = ProjectStep(
        projectId = 5,
        stepNum = 2,
        stepTitle = "Phasellus tincidunt",
        stepDescription = "Sed gravida tellus a sollicitudin tristique. Phasellus eu vehicula orci. Phasellus condimentum blandit porttitor. Aenean rhoncus faucibus ipsum"
    )
    
    p5step3 = ProjectStep(
        projectId = 5,
        stepNum = 3,
        stepTitle = "Nulla id libero consequat",
        stepDescription = "feugiat quam sit amet, ultricies quam. Duis eget justo sed enim malesuada porta et eu odio. Morbi vehicula rutrum blandit. Cras porttitor semper scelerisque. Mauris vel aliquam augue, non egestas ante. "
    )
    
    p6step1 = ProjectStep(
        projectId = 6,
        stepNum = 1,
        stepTitle = "nec lobortis tortor",
        stepDescription = ". Vestibulum sit amet rhoncus metus, sit amet feugiat dui. Etiam vitae elit ut elit tincidunt pellentesque at sed nibh. Vivamus pharetra tellus id nunc placerat pellentesque."
    )
    
    p6step2 = ProjectStep(
        projectId = 6,
        stepNum = 2,
        stepTitle = "Vestibulum venenatis id leo sit amet",
        stepDescription = " Duis dapibus"
    )
    
    p6step3 = ProjectStep(
        projectId = 6,
        stepNum = 3,
        stepTitle = " Duis dapibus",
        stepDescription = "sapien sit amet vehicula porta, ipsum lorem convallis ante, quis blandit lorem libero nec mauris. Aliquam erat volutpat. In fermentum sodales lectus, ut eleifend nisi molestie sed. "
    )
    
    p6step4 = ProjectStep(
        projectId = 6,
        stepNum = 4,
        stepTitle = " Vestibulum cursus nisl convallis",
        stepDescription = "eget imperdiet nunc molestie. Phasellus molestie nec purus vel rutrum. Praesent id eleifend augue. Morbi eu urna dictum, tristique tortor nec, imperdiet ex. Aenean ac sem vitae ex maximus maximus."
    )
    
    p7step1 = ProjectStep(
        projectId = 7,
        stepNum = 1,
        stepTitle = "Duis porta porta eros,",
        stepDescription = "congue scelerisque velit malesuada et. Morbi dapibus metus vel justo iaculis pulvinar. Sed faucibus non urna sit amet tempor. Pellentesque elementum urna nec suscipit condimentum. Nulla id felis tincidunt, rutrum eros eget, lacinia nunc."
    )
    
    p7step2 = ProjectStep(
        projectId = 7,
        stepNum = 2,
        stepTitle = "consectetur adipiscing elit",
        stepDescription = "Nunc eleifend, orci ac accumsan vulputate, turpis lacus imperdiet erat, quis euismod ligula diam sit amet purus. Aenean et mi quam."
    )
    
    p8step1 = ProjectStep(
        projectId = 8,
        stepNum = 1,
        stepTitle = "Just do it",
        stepDescription = "I believe in you. Believe in yourself."
    )
    
    p9step1 = ProjectStep(
        projectId = 9,
        stepNum = 1,
        stepTitle = "Build a play on words from your first name",
        stepDescription = "Consider trying things like rhymes, such as 'dennisthemenace' or 'SillyLily.' Or, use alliteration like 'meticulousmathilda' or 'PensivePenny.'"
    )
    
    p9step2 = ProjectStep(
        projectId = 9,
        stepNum = 2,
        stepTitle = "Combine two or more of your favorite things",
        stepDescription = "Simply brainstorm a list of your favorite things, then smash two or three of them together into a username. You can create absurd, nonsensical usernames in this way, which increases the chances of having a one-of-a-kind username. For example, if you like pandas and orcas, you might make your username 'PandaWhale.' Or, if you’d like a more edgy username, you might try 'KillerPanda.' Try using two favorites from different categories. For instance, if you love ice hockey and creating art out of scrap metal, you might become 'IceWelder.'"
    )
    
    p9step3 = ProjectStep(
        projectId = 9,
        stepNum = 3,
        stepTitle = "Add a memorable number to your favorite pastime",
        stepDescription = " Making a username out of what you love to do will not only make it easy to remember, it will make it uniquely personal. You’ll probably have to tack on a number, though, since there are a lot of usernames with things like “swimmer” or “beautyguru” in them."
    )
    
    p9step4 = ProjectStep(
        projectId = 9,
        stepNum = 4,
        stepTitle = "Highlight an odd habit or interest that sets you apart",
        stepDescription = "Consider trying things like rhymes, such as 'dennisthemenace' or 'SillyLily.' Or, use alliteration like 'meticulousmathilda' or 'PensivePenny.'"
    )
    
    p10step1 = ProjectStep(
        projectId = 10,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    
    p11step1 = ProjectStep(
        projectId = 11,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p12step1 = ProjectStep(
        projectId = 12,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p13step1 = ProjectStep(
        projectId = 13,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p14step1 = ProjectStep(
        projectId = 14,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p15step1 = ProjectStep(
        projectId = 15,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p16step1 = ProjectStep(
        projectId = 16,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p17step1 = ProjectStep(
        projectId = 17,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p18step1 = ProjectStep(
        projectId = 18,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p19step1 = ProjectStep(
        projectId = 19,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p20step1 = ProjectStep(
        projectId = 20,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p21step1 = ProjectStep(
        projectId = 21,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p22step1 = ProjectStep(
        projectId = 22,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p23step1 = ProjectStep(
        projectId = 23,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p24step1 = ProjectStep(
        projectId = 24,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p25step1 = ProjectStep(
        projectId = 25,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p26step1 = ProjectStep(
        projectId = 26,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p27step1 = ProjectStep(
        projectId = 27,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p28step1 = ProjectStep(
        projectId = 28,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p29step1 = ProjectStep(
        projectId = 29,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p30step1 = ProjectStep(
        projectId = 30,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    
    p31step1 = ProjectStep(
        projectId = 31,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    p32step1 = ProjectStep(
        projectId = 32,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    
    p33step1 = ProjectStep(
        projectId = 33,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    
    p34step1 = ProjectStep(
        projectId = 34,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    
    p35step1 = ProjectStep(
        projectId = 35,
        stepNum = 1,
        stepTitle = fake.sentence(),
        stepDescription = fake.text()
    )
    
    
    
    
    
    db.session.add(p1step1)
    db.session.add(p1step2)
    db.session.add(p1step3)
    
    db.session.add(p2step1)
    db.session.add(p2step2)
    db.session.add(p2step3)
    db.session.add(p2step4)
    db.session.add(p3step1)
    db.session.add(p4step1)
    db.session.add(p4step2)
    db.session.add(p5step1)
    db.session.add(p5step2)
    db.session.add(p5step3)
    db.session.add(p6step1)
    db.session.add(p6step2)
    db.session.add(p6step3)
    db.session.add(p6step4)
    db.session.add(p7step1)
    db.session.add(p7step2)
    db.session.add(p8step1)
    
    db.session.add(p9step1)
    db.session.add(p9step2)
    db.session.add(p9step3)
    db.session.add(p9step4)
    db.session.add(p10step1)
    db.session.add(p11step1)
    db.session.add(p12step1)
    db.session.add(p13step1)
    db.session.add(p14step1)
    db.session.add(p15step1)
    db.session.add(p16step1)
    db.session.add(p17step1)
    db.session.add(p18step1)
    db.session.add(p19step1)
    db.session.add(p20step1)
    db.session.add(p21step1)
    db.session.add(p22step1)
    db.session.add(p23step1)
    db.session.add(p24step1)
    db.session.add(p25step1)
    db.session.add(p26step1)
    db.session.add(p27step1)
    db.session.add(p28step1)
    db.session.add(p29step1)
    db.session.add(p30step1)
    db.session.add(p31step1)
    db.session.add(p32step1)
    db.session.add(p33step1)
    db.session.add(p34step1)
    db.session.add(p35step1)
    
    db.session.commit()
    
def undo_project_steps():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.project_steps RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM project_steps")

    db.session.commit()