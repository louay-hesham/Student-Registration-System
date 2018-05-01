-- Create DB
CREATE DATABASE StudentRegistrationSystem CHARACTER SET utf8 COLLATE utf8_bin;
USE StudentRegistrationSystem;

-- Create Tables
CREATE TABLE Department (
  ID varchar(10) PRIMARY KEY,
  Name varchar(100) UNIQUE NOT NULL,
  Description MEDIUMTEXT
);

CREATE TABLE User (
  ID int auto_increment Primary Key,
  Email varchar(50) unique NOT NULL,
  Username varchar(30) unique NOT NULL,
  Password varchar(150) NOT NULL,
  RegistrationDate timestamp default CURRENT_TIMESTAMP NOT NULL,
  Department varchar(10),
  FOREIGN KEY (Department) REFERENCES Department(ID)
);

CREATE TABLE Course (
  ID varchar(10) PRIMARY KEY,
  Name varchar(75) NOT NULL,
  CreditHours int NOT NULL,
  InstructorName varchar(100) NOT NULL,
  Description MEDIUMTEXT,
  Department varchar(10),
  FOREIGN KEY (Department) REFERENCES Department(ID)
);

CREATE TABLE Registeration (
  CourseID varchar(10) NOT NULL,
  UserID int NOT NULL,
  RegistrationDate timestamp default CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY (CourseID) REFERENCES Course(ID),
  FOREIGN KEY (UserID) REFERENCES User(ID)
);

-- Insert Data
INSERT INTO Department VALUES
('AST', 'Astronomy Department', 'Learn how to read the celestial bodies, and how their positions affects the magical world.'),
('MS', 'Muggle Studies', 'In this department, you will learn several muggles\' educational curriculums. You\'ll also learn how to integrate in the muggle society, how to interact with muggle technology and how it\'s userful to a wizard.'),
('CMC', 'Care of Magical Creatures', 'Learn how to care for several magical creatures, their biology, and how they evolved through time.'),
('DDA', 'Defence Against the Dark Arts', 'Learn all about the forbidden spells, who uses them and how to defend yourself against them.'),
('HP', 'Herbology and Potions', 'The study of herbs and plants, how they can be useful in making potions, the procedures for creating different potions and their effects.'),
('SC', 'Spell and Charms', 'The study of different spells, charms, their effects, how to properly cast them and their dangers.');

INSERT INTO Course VALUES
('AST101', 'Introduction to Astronomy', 3, 'Aurora Sinistra', 'An introduction to astronomy and how to trace the positions of celestial bodies', 'AST'),
('AST102', 'Solar System', 4, 'Sybill Trelawney', 'Studying the celestial bodies in the solar system', 'AST'),
('AST103', 'Sun and Moon', 3, 'Aurora Sinistra', 'The study of the bodies that affect us the most in our solar system', 'AST'),
('AST201', 'The Milky Way', 4, 'Sybill Trelawney', 'Studying our own galaxy and its contents', 'AST'),
('AST202', 'Arithmancy', 3, 'Septima Vector', 'The study of the magical properties of numbers and how they can predict the future.', 'AST'),
('AST301', 'Divination', 5, 'Firenze the Centaur', 'Predicting the future using astronomy and numbers.', 'AST')

('MS101', 'Muggle Lifestyle', 3, 'Charity Burbage', 'In this course you will learn how an average Joe goes around their daily lifes and routines', 'MS'),
('MS102', 'Muggle Economy', 3, 'Charity Burbage', 'In this course you will learn about how the economic world of muggles work', 'MS'),
('MS103', 'Wizard Muggle Interaction', 2, 'Alecto Carrow', 'In this course you will learn the rules of interaction between wizards and muggles.', 'MS'),
('MS201', 'Technology I', 4, 'Quirinus Quirrell', 'An introduction to the muggle technlogy and its evolution through history', 'MS'),
('MS301', 'Technology II', 4, 'Quirinus Quirrell', 'Advanced study of muggle technology.', 'MS'),

('CMC101', 'Introduction to Magical Creatures', 3, 'Rubeus Hagrid', 'A brief introduction to all magical creatures, their habitat and their diets.', 'CMC'),
('CMC102', 'Evolution of Magical Creatures I', 4 , 'Rubeus Hagrid', 'The study of how magical creatures came into existence and their evolution throug time.', 'CMC'),
('CMC103', 'Treatments of Magical Creatures', 3, 'Silvanus Kettleburn', 'Magical creatures get sick all the time and need their medicine. This course teaches you about the treatments currently available for different diseases and their effects.', 'CMC'),
('CMC201', 'Evolution of Magical Creatures II', 4 , 'Wilhelmina Grubbly-Plank', 'Advanced study of magical creatures evolution.', 'CMC'),


('DDA101', 'Dark Arts', 3, 'Amycus Carrow', 'The study of the dark arts and the forbidden spells.', 'DDA'),
('DDA102', 'The Dark Lord and Death Eaters', 5, 'Severus Snape', 'The history of the Dark Lord and his followers, the so-called Death Eaters.', 'DDA'),
('DDA201', 'Defence Against the Forbidden Spells', 4, 'Barty Crouch Jr', 'How do defend yourself in the situation that one of the forbidden spells is used on you.', 'DDA'),
('DDA202', 'Azkaban Prison', 3, 'Dolores Umbridge', 'The study of how the prison of Azkaban work, how to contact dementors and how to communicate with them.', 'DDA'),
('DDA301', 'Famous Wrongdoers', 2, 'Gilderoy Lockhart', 'A brief introduction to some famous wrongdoers, their crimes and how they were caught.', 'DDA'),

('HP101', 'Herbology I', 3, 'Herbert Beery', 'Introduction to herbology and common plants used in potions, their properties and their dangers.', 'HP'),
('HP102', 'Potions I', 3, 'Horace Slughorn', 'Introduction to potions and how to prepare basic potions.', 'HP'),
('HP201', 'Herbology II', 3, 'Neville Longbottom', 'More advanced study of not commonly found herbs.', 'HP'),
('HP202', 'Potions II', 3, 'Severus Snape', 'Advanced potions preparations and studying their effects.', 'HP'),
('HP301', 'Herbology III', 4, 'Pomona Sprout', 'The study of rare and ultra rare plants and herbs. Also includes dangerous and poisonous plants.', 'HP'),
('HP302', 'Potions III', 4, 'Swoopstikes', 'Professional study of dangerous potions and harder to prepare serums.', 'HP'),

('SC101', 'Charms I', 3, 'Gilderoy Lockhart', 'Introduction to simple charms and spells that can help you in your daily life.', 'SC'),
('SC102', 'Transfiguration I', 3, 'Minerva McGonagall', 'Introduction to simple transfiguration techniques and spells of different objects.', 'SC'),
('SC201', 'Charms II', 3, 'Filius Flitwick', 'More advanced charms and spells study.', 'SC'),
('SC202', 'Transfiguration II', 3, 'Albus Dumbledore', 'More advanced transfiguration techniques on objects using philophilosopher\'s stones.', 'SC')
('SC301', 'Flying', 2, 'Rolanda Hooch', 'Learn how to fly on a broomstick and play Quidditch!'),
('SC302', 'Biological Transfiguration', 4, 'Minerva McGonagall', 'Learn the most advanced type of transfiguration, the biological one.', 'SC');