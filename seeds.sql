INSERT INTO department (name)
VALUES ("Sales"),
  ("Accounting"),
  ("Human Resources"),
  ("Management"),
  ("Warehouse");
  
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Paper Salesmen", 35000, 1),
  (2, "Budget Management", 50000, 2),
  (3, "Quality Assurance", 27500, 3),
  (4, "Manager", 65000, 4),
  (5, "Assistant-to-the-Manager", 35000, 4),
  (6, "Receptionist", 24000, 3),
  (7, "Human Resources Lead", 45000, 3),
  (8, "Payroll", 50000, 2),
  (9, "Warehouse Management", 38000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "michael", "scott", 1, NULL),
  (2, "dwight", "schrute", 2, 1),
  (3, "jim", "halpert", 1, 1),
  (4, "pam", "beesly", 1, 1),
  (5, "oscar", "martinez", 1, 1),
  (6, "kevin", "malone", 1, 1),
  (7, "angela", "martin", 2, 1),
  (8, "erin", "hannon", 2, 1),
  (9, "phyllis", "vance", 1, 1),
  (10, "stanley", "hudson", 1, 1),
  (11, "andy", "bernard", 1, 1),
  (12, "kelly", "kapoor", 1, 1),
  (13, "toby", "flenderson", 3, NULL),
  (14, "darryl", "philibin", 1, 1);