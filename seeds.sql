INSERT INTO department (name)
VALUES ("Sales"),
       ("Accounting"),
       ("Human Resources"),
       ("Management"),
       ("Warehouse");

INSERT INTO role (name, department)
VALUES ("Paper Salesmen", 1),
       ("Budget Management", 2),
       ("Quality Assurance", 3),
       ("Manager", 4),
       ("Assistant-to-the-Manager", 4),
       ("Receptionist", 3 ),
       ("Human Resources Lead", 3),
       ("Payroll", 2),
       ("Warehouse Management");
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ( 1, "michael", "scott", 4, NULL),
       ( 2, "dwight", "schrute", 4, 1),
       ( 3, "jim", "halpert", 1, 1),
       ( 4, "pam", "beesly", 1, 1),
       ( 5, "oscar", "martinez", 2, 1),
       (6, "kevin", "malone", 2, 1),
       (7, "angela", "martin", 2, 1),
       (8, "erin", "hannon", 3, 1),
       (9, "phyllis", "vance", 1, 1),
       (10, "stanley", "hudson", 1, 1),
       (11, "andy", "bernard", 1, 1),
       (12, "kelly", "kapoor", 3, 1),
       (13, "toby", "flenderson", 3, NULL),
       (14, "darryl", "philibin", 4, 1);

       




