DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE department (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL NOT NULL default 0,
    department_id INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
	CONSTRAINT fk_role FOREIGN KEY (role_id) 
	REFERENCES role(id),
    manager_id INT NULL,
	CONSTRAINT fk_manager FOREIGN KEY (manager_id)
	REFERENCES employee(id)
);

INSERT INTO department (department_name) 
VALUES 
      ('Engineer'), 
      ('Sales'), 
      ('Marketing'), 
      ('Finance'), 
      ('Human Resources');


INSERT INTO role (title, salary, department_id) 
VALUES 
      ('Lead Engineer', 150000, 1), 
      ('Software Engineer', 80000, 1), 
      ('Salesperson', 100000, 2), 
      ('Marketing Coordinator', 60000, 3), 
      ('Accountant', 90000, 4), 
      ('Human Resource Generalist', 65000, 5);
