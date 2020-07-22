DROP DATABASE IF EXISTS staff_db;
CREATE DATABASE staff_db;
USE staff_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (10,2) NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL
);

INSERT INTO department (name)
VALUES ("Corporate"), ("HR"), ("Sales"), ("Accounting"), ("Office Administrator"), ("Quality Assurance"), ("Customer Service"), ("Reception"), ("Warehouse");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 75000, 1),
("Head of HR", 25000, 2),
("Salesman", 60000, 3),
("Head of Accounting", 65000, 4),
("Office Administrator", 41500, 5),
("Head of Quality Assurance", 40000, 6),
("Customer Service Rep", 30000, 7),
("Receptionist", 30000, 8),
("Foreman", 35000, 9);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1, null),
("Toby", "Flenderson", 2, 1),
("Dwight", "Schrute", 3, 1),
("Angela", "Martin", 4, 1),
("Pam", "Beesly", 5, 1), 
("Meredith", "Palmer", 6, 1),
("Kelly", "Kapoor", 7, 1), 
("Erin", "Hannon", 8, 1), 
("Darryl", "Philbin", 9, 1); 


-- * **department**:

--   * **id** - INT PRIMARY KEY
--   * **name** - VARCHAR(30) to hold department name


-- * **role**:

--   * **id** - INT PRIMARY KEY
--   * **title** -  VARCHAR(30) to hold role title
--   * **salary** -  DECIMAL to hold role salary
--   * **department_id** -  INT to hold reference to department role belongs to

-- * **employee**:

--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager