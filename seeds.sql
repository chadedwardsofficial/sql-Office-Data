INSERT INTO department (name)
VALUES 
  ("Sales"),
  ("Accounting"),
  ("Human Resources"),
  ("Management"),
  ("Warehouse");

INSERT INTO role (title, salary, department_id)
VALUES 
  ("Paper Salesmen", 35000, 1),
  ("Budget Management", 50000, 2),
  ("Quality Assurance", 27500, 3),
  ("Manager", 65000, 4),
  ("Assistant-to-the-Manager", 35000, 4),
  ("Receptionist", 24000, 3),
  ("Human Resources Lead", 45000, 3),
  ("Payroll", 50000, 2),
  ("Warehouse Management", 38000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
  ("michael", "scott", 1, NULL),
  ("dwight", "schrute", 2, 1),
  ("jim", "halpert", 1, 1),
  ("pam", "beesly", 1, 1),
  ("oscar", "martinez", 1, 1),
  ("kevin", "malone", 1, 1),
  ("angela", "martin", 2, 1),
  ("erin", "hannon", 2, 1),
  ("phyllis", "vance", 1, 1),
  ("stanley", "hudson", 1, 1),
  ("andy", "bernard", 1, 1),
  ("kelly", "kapoor", 1, 1),
  ("toby", "flenderson", 3, NULL),
  ("darryl", "philibin", 1, 1);
