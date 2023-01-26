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
    
    db.session.commit()
    
def undo_project_steps():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.project_steps RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM project_steps")

    db.session.commit()