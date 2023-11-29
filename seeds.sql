INSERT INTO department (name)
VALUES 
  ("Sales"),
  ("Accounting"),
  ("Human Resources"),
  ("Management"),
  ("Warehouse");

-- Insert roles
INSERT INTO role (id, title, salary, department_id)
VALUES 
  (1, "Paper Salesmen", 35000, 1),
  (2, "Budget Management", 50000, 2),
  (3, "Quality Assurance", 27500, 3),
  (4, "Manager", 65000, 4),
  (5, "Assistant-to-the-Manager", 35000, 4),
  (6, "Receptionist", 24000, 3),
  (7, "Human Resources Lead", 45000, 3),
  (8, "Payroll", 50000, 2),
  (9, "Warehouse Management", 38000, 5),
  (10, "Human Resources Manager", 50000, 3),
  (11, "Whatever-Kevin Does", 30000, 2);



INSERT INTO employee (id, first_name, last_name, job_title, department_name, salary, manager_name)
VALUES 
  (1, "Michael", "Scott", "Manager", "Management", 65000, "Jan Levinson"),
  (2, "Dwight", "Schrute", "Assistant-to-the-Manager", "Sales", 35000, "Michael Scott"),
  (3, "Jim", "Halpert", "Paper Salesmen", "Sales", 35000, "Michael Scott"),
  (4, "Pam", "Beesly", "Paper Salesmen", "Sales", 35000, "Michael Scott"),
  (5, "Oscar", "Martinez", "Budget Management", "Accounting", 50000, "Michael Scott"),
  (6, "Kevin", "Malone", "Whatever-Kevin Does", "Accounting", 30000, "Michael Scott"),
  (7, "Angela", "Martin", "Payroll", "Accounting", 50000, "Michael Scott"),
  (8, "Erin", "Hannon", "Receptionist", "Human Resources", 24000, "Michael Scott"),
  (9, "Phyllis", "Vance", "Paper Salesmen", "Sales", 35000, "Michael Scott"),
  (10, "Stanley", "Hudson", "Paper Salesmen", "Sales", 35000, "Michael Scott"),
  (11, "Andy", "Bernard", "Paper Salesmen", "Sales", 35000, "Michael Scott"),
  (12, "Kelly", "Kapoor", "Quality Assurance", "Human Resources", 27500, "Michael Scott"),
  (13, "Toby", "Flenderson", "Human Resources Manager", "Human Resources", 24000, "Jan Levinson"),
  (14, "Darryl", "Philibin", "Warehouse Management", "Warehouse", 38000, "Michael Scott");
