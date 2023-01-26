from app.models import db, Project, environment, SCHEMA

def seed_projects():
    project1 = Project(
        creatorId = 1,
        title = "How To Pet a Cat",
        category = "Living",
        coverImageUrl = "https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/0f3b6a5f-b532-4e79-b269-97176929ce54/article-grooming-your-cat.jpg",
        intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        supplies = "1 hand, 1 cat"
    )
    project2 = Project(
        creatorId = 1,
        title = "How Breathe",
        category = "Living",
        coverImageUrl = "https://www.shutterstock.com/image-vector/infographics-breathing-cycle-inspiration-expiration-260nw-1836313750.jpg",
        intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        supplies = "At least 1 lung, 2 lungs for optimal results, 1 diaphragm"
    )
    
    project3 = Project(
        creatorId = 2,
        title = "Lorem ipsum dolor sit amet",
        category = "Circuits",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e0dd414b53aa14f1dc8460962e33791c3ad6e04e507441722a72dd9f4acc_640.jpg",
        intro = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
        supplies = "Anything you can get your hands one, use it all!"
    )
    
    project4 = Project(
        creatorId = 2,
        title = "Fusce vel eros a tortor",
        category = "Workshop",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/52e3d6434253ad14f1dc8460962e33791c3ad6e04e507440742a7ad6954cc4_640.jpg",
        intro = "pellentesque finibus ac in sem. Ut purus tellus, fringilla vel pretium id, congue et libero. Morbi sed euismod eros. Sed a turpis tempus, aliquam quam sed, consectetur nunc.",
        supplies = "sit amet, consectetur, adipisci velit..."
    )
    
    project5 = Project(
        creatorId = 3,
        title = "Fusce ulla",
        category = "Craft",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e3d5444f53ac14f1dc8460962e33791c3ad6e04e507440772872d3914ccc_640.jpg",
        intro = "Quisque efficitur sapien sed libero pulvinar efficitur. Vivamus tempus tempor malesuada. Nunc maximus felis nec elit eleifend dignissim. Aenean vulputate magna ut commodo venenatis. Fusce ac diam risus. Maecenas luctus ante lectus, in vestibulum ipsum fermentum id. Vivamus leo enim, varius sed felis vitae, semper lacinia elit. Ma",
        supplies = "na leo. Integer sed tortor in leo pulvinar pla"
    )
    
    project6 = Project(
        creatorId = 3,
        title = "Vestibulum vel dapibus nunc",
        category = "Cooking",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/55e1d34a4257b10ff3d8992cc12c30771037dbf85254794075287cdc9144_640.jpg",
        intro = "nec lobortis tortor. Nullam volutpat justo vitae mi dapibus viverra. Donec eget nunc sed odio pharetra euismod. Donec a lectus mauris. Aenean sodales rutrum tristique. Vivamus ullamcorper, quam eget auctor viverra, erat erat feugiat sem, sit amet ultricies sem lectus id nibh. Aenean at finibus nibh, at vulputate purus. Donec ligula nisl, sodales tristique ex et, auctor semper risus.",
        supplies = "Pellentesque euismod tortor luctus mauris convallis finibus. Vestibulum sit amet rhoncus metus, sit amet feugiat dui. Etiam vitae elit ut elit tincidunt pellentesque at sed nibh. Vivamus pharetra tellus id nunc placerat pellentesque. Nulla ac tempus magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce sed dui imperdiet, porta neque ac, scelerisque lorem."
    )
    
    project7 = Project(
        creatorId = 3,
        title = "Duis porta porta eros, congue scelerisque velit malesuada et.",
        category = "Outside",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/55e3d1424856a914f1dc8460962e33791c3ad6e04e50744172287ad29645c2_640.jpg",
        intro = "Duis porta porta eros, congue scelerisque velit malesuada et. Morbi dapibus metus vel justo iaculis pulvinar.",
        supplies = "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
    )
    
    project8 = Project(
        creatorId = 1,
        title = "HOW TO DO ANYTHING",
        category = "Teachers",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/54e7d7404853a914f1dc8460962e33791c3ad6e04e507440752972d29e4bc3_640.jpg",
        intro = "Just kidding, I don't know",
        supplies = "Things, many things"
    )
    
    db.session.add(project1)
    db.session.add(project2)
    db.session.add(project3)
    db.session.add(project4)
    db.session.add(project5)
    db.session.add(project6)
    db.session.add(project7)
    db.session.add(project8)
    
    db.session.commit()
    
def undo_projects():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.projects RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM projects")

    db.session.commit()