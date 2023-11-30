DROP DATABASE IF EXISTS office_db;
CREATE DATABASE office_db;

USE office_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30),
  INDEX (name)  
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_name VARCHAR(30),
  FOREIGN KEY (department_name)
    REFERENCES department(name)
    ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  job_title VARCHAR(30),
  department_name VARCHAR(30),
  salary DECIMAL NOT NULL,
  manager_name VARCHAR(60),  
  INDEX (department_name),  
  FOREIGN KEY (department_name)
    REFERENCES department(name)
    ON DELETE SET NULL
);
