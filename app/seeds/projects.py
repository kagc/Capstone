from app.models import db, Project, environment, SCHEMA
from datetime import datetime

def seed_projects():
    project1 = Project(
        creatorId = 1,
        title = "How To Pet a Cat",
        category = "Living",
        coverImageUrl = "https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/0f3b6a5f-b532-4e79-b269-97176929ce54/article-grooming-your-cat.jpg",
        intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        supplies = "1 hand, 1 cat",
        created_at = datetime(2023, 1, 25, 12, 00)
    )
    project2 = Project(
        creatorId = 1,
        title = "How Breathe",
        category = "Living",
        coverImageUrl = "https://www.shutterstock.com/image-vector/infographics-breathing-cycle-inspiration-expiration-260nw-1836313750.jpg",
        intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis ",
        supplies = "At least 1 lung, 2 lungs for optimal results, 1 diaphragm",
        created_at = datetime(2023, 1, 25, 12, 00)
    )
    
    project3 = Project(
        creatorId = 2,
        title = "Lorem ipsum dolor sit amet",
        category = "Circuits",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e0dd414b53aa14f1dc8460962e33791c3ad6e04e507441722a72dd9f4acc_640.jpg",
        intro = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue",
        supplies = "Anything you can get your hands one, use it all!",
        created_at = datetime(2023, 1, 25, 12, 00)
    )
    
    project4 = Project(
        creatorId = 2,
        title = "Fusce vel eros a tortor",
        category = "Workshop",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/52e3d6434253ad14f1dc8460962e33791c3ad6e04e507440742a7ad6954cc4_640.jpg",
        intro = "pellentesque finibus ac in sem. Ut purus tellus, fringilla vel pretium id, congue et libero. Morbi sed euismod eros. Sed a turpis tempus, aliquam quam sed, consectetur nunc.",
        supplies = "sit amet, consectetur, adipisci velit...",
        created_at = datetime(2023, 1, 25, 12, 00)
    )
    
    project5 = Project(
        creatorId = 3,
        title = "Fusce ulla",
        category = "Craft",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e3d5444f53ac14f1dc8460962e33791c3ad6e04e507440772872d3914ccc_640.jpg",
        intro = "Quisque efficitur sapien sed libero pulvinar efficitur. Vivamus tempus tempor malesuada. Nunc maximus felis nec elit eleifend dignissim. Aenean vulputate ",
        supplies = "na leo. Integer sed tortor in leo pulvinar pla",
        created_at = datetime(2023, 1, 25, 12, 00)
    )
    
    project6 = Project(
        creatorId = 3,
        title = "Vestibulum vel dapibus nunc",
        category = "Cooking",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/55e1d34a4257b10ff3d8992cc12c30771037dbf85254794075287cdc9144_640.jpg",
        intro = "nec lobortis tortor. Nullam volutpat justo vitae mi dapibus viverra. Donec eget nunc sed odio pharetra euismod. Donec a lectus mauris. Aenean sodales rutrum tristique. Vivamus ullamcorper, quam eget auctor viverra, erat erat feugiat ",
        supplies = "Pellentesque euismod tortor luctus mauris convallis finibus. Vestibulum sit amet rhoncus metus, sit amet feugiat dui. Etiam vitae elit ut elit tincidunt pellentesque at sed nibh. Vivamus pharetra tellus id nunc placerat pellentesque. ",
        created_at = datetime(2023, 1, 25, 12, 00)
    )
    
    project7 = Project(
        creatorId = 3,
        title = "Duis porta porta eros",
        category = "Outside",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/55e3d1424856a914f1dc8460962e33791c3ad6e04e50744172287ad29645c2_640.jpg",
        intro = "Duis porta porta eros, congue scelerisque velit malesuada et. Morbi dapibus metus vel justo iaculis pulvinar.",
        supplies = "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
        created_at = datetime(2023, 1, 25, 12, 00)
    )
    
    project8 = Project(
        creatorId = 1,
        title = "HOW TO DO ANYTHING",
        category = "Teachers",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/54e7d7404853a914f1dc8460962e33791c3ad6e04e507440752972d29e4bc3_640.jpg",
        intro = "Just kidding, I don't know",
        supplies = "Things, many things",
        created_at = datetime(2023, 1, 25, 12, 00)
    )
    
    project9 = Project(
        creatorId = 6,
        title = "How to Make a Unique Username",
        category = "Circuits",
        coverImageUrl = "https://www.wikihow.com/images/thumb/1/1b/Make-a-Unique-Username-Step-2-Version-4.jpg",
        intro = "We all know first impressions matter on social media. So how do you choose the perfect username for Instagram, TikTok, Twitter, and other social media platforms when it feels like all the best ones are already being used? Whether you’re coming up with username ideas for your own profile or building your brand, the right name will make you stand out and get noticed. Plus, your social media handle tells your friends and followers about who you are! Need a little inspiration? Check out our list of ideas as you create a memorable, unique, influencer-worthy username.",
        supplies = "A website where you need a unique username",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project10 = Project(
        creatorId = 1,
        title = "How to 10",
        category = "Circuits",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e2d54a4e51a514f1dc8460962e33791c3ad6e04e50744172277ed0974ac3_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project11 = Project(
        creatorId = 1,
        title = "How to 11",
        category = "Circuits",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e7d6454856ac14f1dc8460962e33791c3ad6e04e507440762a7cd6934acc_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project12 = Project(
        creatorId = 2,
        title = "How to 12",
        category = "Circuits",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e4d04a4950ae14f1dc8460962e33791c3ad6e04e5074417d2d73d3934ac3_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project13 = Project(
        creatorId = 3,
        title = "How to 13",
        category = "Workshop",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e1d14a4b50ae14f1dc8460962e33791c3ad6e04e50744172297cd59e4ac0_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project14 = Project(
        creatorId = 4,
        title = "How to 14",
        category = "Workshop",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e5dd434a56ac14f1dc8460962e33791c3ad6e04e5074417d2e72d29048c6_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project15 = Project(
        creatorId = 5,
        title = "How to 15",
        category = "Workshop",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/54e5d5414355aa14f1dc8460962e33791c3ad6e04e507440752f72d7954bc2_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project16 = Project(
        creatorId = 6,
        title = "How to 16",
        category = "Workshop",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/54e0dc4b434faa0df7c5d57bc32f3e7b1d3ac3e45659784b762979dd90_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project17 = Project(
        creatorId = 7,
        title = "How to 17",
        category = "Craft",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e8d4474a51ae14f1dc8460962e33791c3ad6e04e507440742a7ad19e49cc_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project18 = Project(
        creatorId = 8,
        title = "How to 18",
        category = "Craft",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e8d34b4d53aa14f1dc8460962e33791c3ad6e04e507440762a7cd49e4dc2_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project19 = Project(
        creatorId = 9,
        title = "How to 19",
        category = "Craft",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e7dd474c50ad14f1dc8460962e33791c3ad6e04e5074417c2d78d1954cc7_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project20 = Project(
        creatorId = 10,
        title = "How to 20",
        category = "Craft",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e2d54a4954a814f1dc8460962e33791c3ad6e04e50744172297bd4944bc3_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project21 = Project(
        creatorId = 1,
        title = "How to 21",
        category = "Cooking",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/52e0d5434354a414f1dc8460962e33791c3ad6e04e5074417d2d73d29e44c4_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project22 = Project(
        creatorId = 2,
        title = "How to 22",
        category = "Cooking",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/54e6dc464856af14f1dc8460962e33791c3ad6e04e50744172277ed79044cd_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project23 = Project(
        creatorId = 3,
        title = "How to 23",
        category = "Cooking",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/54e6dc4b4d51ad14f1dc8460962e33791c3ad6e04e507440762879dc964ec4_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project24 = Project(
        creatorId = 4,
        title = "How to 24",
        category = "Cooking",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/50e7d0444e4faa0df7c5d57bc32f3e7b1d3ac3e45659784972287fd192_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project25 = Project(
        creatorId = 5,
        title = "How to 25",
        category = "Living",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/53e5dd45495aa914f1dc8460962e33791c3ad6e04e507749742d7cd79e4cc0_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project26 = Project(
        creatorId = 6,
        title = "How to 26",
        category = "Living",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/53e0d5464f51a814f1dc8460962e33791c3ad6e04e507441722a72dc9e48c3_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project27 = Project(
        creatorId = 7,
        title = "How to 27",
        category = "Living",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/g5900afbace889449de13b9517d62c4523c263e41fb608327c8cc26f1ad4e5b85f9414b61f23590fe1db589b27a043bf2_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project28 = Project(
        creatorId = 8,
        title = "How to 28",
        category = "Outside",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/55e4d5464f5ba914f1dc8460962e33791c3ad6e04e5074417d2d73dc934bcd_640.jpg",
        intro = "What in the world is this image, it's a catbird thing?",
        supplies = "1 catbird thing",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project29 = Project(
        creatorId = 9,
        title = "How to 29",
        category = "Outside",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/57e6d5444a52ad14f1dc8460962e33791c3ad6e04e5074417d2e72d69e4fcd_640.jpg",
        intro = "Have you ever wanted to be really tiny and row yourself in a tiny barrel in what looks like a really big glass of beer? Let's get started!",
        supplies = "A shrinkray to shrink yourself or the opposite to make a really big glass of beer! You'll also need a glass of beer, probably. Substitute beer for any other beverage you want!",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project30 = Project(
        creatorId = 10,
        title = "How to 30",
        category = "Outside",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/55e8d5424b56a514f1dc8460962e33791c3ad6e04e5074417d2e72d29e4ac3_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project31 = Project(
        creatorId = 1,
        title = "How to 31",
        category = "Outside",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/50e1d3404a4faa0df7c5d57bc32f3e7b1d3ac3e45658724c722f7ed594_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project32 = Project(
        creatorId = 2,
        title = "How to 10",
        category = "Teachers",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/51e1d3444d5ab10ff3d8992cc12c30771037dbf852547941742673d59f49_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project33 = Project(
        creatorId = 3,
        title = "How to 33",
        category = "Teachers",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/hot-air-balloon-736879_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project34 = Project(
        creatorId = 4,
        title = "How to 34",
        category = "Teachers",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/55e6dc414a54af14f1dc8460962e33791c3ad6e04e5074417c2f7cd3924fc7_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    project35 = Project(
        creatorId = 5,
        title = "How to 35",
        category = "Teachers",
        coverImageUrl = "https://randomwordgenerator.com/img/picture-generator/55e5dd474d5baf14f1dc8460962e33791c3ad6e04e507440772d73d49745c0_640.jpg",
        intro = "When most people think of origami, their mind jumps straight to the elegant paper crane. The idea of folding a paper crane yourself might seem intimidating at first, but the process is super straightforward and even first-time origami makers can make one in just a few minutes. In this article, we’ll show you how to make a traditional origami crane step-by-step (with visuals to help you bring your beautiful bird to life). All you need is a square of paper and a flat surface. Let’s get started!",
        supplies = "Use traditional origami paper in the shape of a square for the best results. Choose paper with a color or design you enjoy to make your paper crane pop.",
        created_at = datetime(2023, 1, 31, 12, 00)
    )
    
    db.session.add(project1)
    db.session.add(project2)
    db.session.add(project3)
    db.session.add(project4)
    db.session.add(project5)
    db.session.add(project6)
    db.session.add(project7)
    db.session.add(project8)
    
    db.session.add(project9)
    db.session.add(project10)
    db.session.add(project11)
    db.session.add(project12)
    db.session.add(project13)
    db.session.add(project14)
    db.session.add(project15)
    db.session.add(project16)
    db.session.add(project17)
    db.session.add(project18)
    db.session.add(project19)
    db.session.add(project20)
    db.session.add(project21)
    db.session.add(project22)
    db.session.add(project23)
    db.session.add(project24)
    db.session.add(project25)
    db.session.add(project26)
    db.session.add(project27)
    db.session.add(project28)
    db.session.add(project29)
    db.session.add(project30)
    db.session.add(project31)
    db.session.add(project32)
    db.session.add(project33)
    db.session.add(project34)
    db.session.add(project35)
    
    db.session.commit()
    
def undo_projects():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.projects RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM projects")

    db.session.commit()