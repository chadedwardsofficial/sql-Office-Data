DROP DATABASE IF EXISTS office_db;
CREATE DATABASE office_db;

USE office_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30),
  INDEX (name)  -- Add index on the 'name' column
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
  manager_name VARCHAR(60),  -- Combine first_name and last_name for manager
  INDEX (department_name),  -- Add index on the 'department_name' column
  FOREIGN KEY (department_name)
    REFERENCES department(name)
    ON DELETE SET NULL
);
