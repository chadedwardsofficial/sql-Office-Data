INSERT INTO department (name)
VALUES 
  ("Sales"),
  ("Accounting"),
  ("Human Resources"),
  ("Management"),
  ("Warehouse");

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
  (10, "Human Resources Manager", 50000, 3)
  (11, "Whatever-Kevin Does", 30,000, 2);


INSERT INTO employee (id, first_name, last_name, department, job_title, salary, manager)
VALUES 
  (1, "michael", "scott", "Management", "Manager", 65000, "Jan Levinson"),
  (2, "dwight", "schrute", "Sales", "Assistant-to-the-Manager", 35000,  "Michael Scott"),
  (3, "jim", "halpert", "Sales", "Paper Salesmen", 35000, "Michael Scott"),
  (4, "pam", "beesly", "Sales", "Paper Salesmen", 35000, "Michael Scott"),
  (5, "oscar", "martinez", "Accounting", "Budget Management",  50000, "Michael Scott"),
  (6, "kevin", "malone", "Accounting", "Whatever-Kevin Does", 30000,  "Michael Scott"),
  (7, "angela", "martin", "Accounting", "Payroll", "50000", "Michael Scott"),
  (8, "erin", "hannon", "Human Resources", "Receptionist", 24000, "Michael Scott"),
  (9, "phyllis", "vance", "Sales", "Paper Salesmen", 35000, "Michael Scott"),
  (10, "stanley", "hudson", "Sales", "Paper Salesmen", 35000, "Michael Scott"),
  (11, "andy", "bernard", "Sales", "Paper Salesmen", 35000, "Michael Scott"),
  (12, "kelly", "kapoor", "Human Resources", "Quality Assurance", 27500, "Michael Scott"),
  (13, "toby", "flenderson", "Human Resources", "Human Resources Manager", 24000, "Jan Levinson"),
  (14, "darryl", "philibin", "Warehouse", "Warehouse Management", 38000, "Michael Scott"),