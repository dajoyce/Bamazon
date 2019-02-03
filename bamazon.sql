--Create Database and Table
DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(45) NULL,
department_name VARCHAR(45) NULL, 
price INT NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);

-- Populating the Table
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Electric Guitar", "Music", 300, 50),
("Samsung 40 inch TV", "Electronics", 400, 100),
("Samsung Soundbar", "Electronics", 150, 100),
("Blender", "Kitchen", 40, 200),
("Kuerig Coffee Pot", "Kitchen", 85, 200),
("Chris Nolan Batman Trilogy DVDs", "Electronics", 80, 100),
("Benelli Shotgun", "Hunting", 1400, 50),
("Shotgun Ammo", "Hunting", 7, 200),
("Clay Pigeon Targets", "Hunting", 15, 100),
("Duck Call", "Hunting", 80, 25),
("Playstation 4", "Electronics", 400, 50),
("Drum Kit", "Music", 400, 10);

SELECT * FROM bamazon_DB.products;