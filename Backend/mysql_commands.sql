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