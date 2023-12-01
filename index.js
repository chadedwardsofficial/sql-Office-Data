const inquirer = require("inquirer");
const db = require("./connection.js");

loadPrompts();

function loadPrompts() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          {
            name: "Add Department",
            value: "add_department",
          },
          {
            name: "Add Employee",
            value: "add_employee",
          },
          {
            name: "Add Role",
            value: "add_role",
          },
          {
            name: "View All Departments",
            value: "view_departments",
          },
          {
            name: "View All Employees",
            value: "view_employees",
          },
          {
            name: "View All Roles",
            value: "view_roles",
          },
          {
            name: "Update Employee Role",
            value: "update_employee_role",
          },
          {
            name: "Quit",
            value: "quit",
          },
        ],
      },
    ])
    .then((res) => {
      let choice = res.choice;
      switch (choice) {
        case "add_department":
          addDepartment();
          break;
        case "add_employee":
          addEmployee();
          break;
        case "add_role":
          addRole();
          break;
        case "view_departments":
          viewDepartments();
          break;
        case "view_employees":
          viewEmployees();
          break;
        case "view_roles":
          viewRoles();
          break;
        case "update_employee_role":
          updateEmployeeRole();
          break;
        default:
          quit();
      }
    });
}

function quit() {
  process.exit();
}

// VIEW FUNCTIONS // 

function viewDepartments() {
  db.query(
    "SELECT department.id , department.name FROM department ",
    function (err, results) {
      console.table(results);
      loadPrompts();
    }
  );
}
function viewEmployees() {
  db.query("SELECT * FROM employee ", function (err, results) {
    console.table(results);
    loadPrompts();
  });
}

function viewRoles() {
  db.query("SELECT * FROM role ", function (err, results) {
    console.table(results);
    loadPrompts();
  });
}




// ADD FUNCTIONS //


function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the Department?",
      },
    ])
    .then((res) => {
      let name = res;
      db.query("INSERT INTO department SET ?", name, function (err, results) {
        console.log(`Added Department!`);
      });
    })
    .then(() => console.log("Added Department!"))
    .then(() => loadPrompts());
}




function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Role Title?",
      },
      {
        type: "input",
        name: "salary",
        message: "Role Salary?",
      },
      {
        type: "input",
        name: "department",
        message: "Which Department?",
      },
    ])
    .then((res) => {
      let { title, salary, department } = res;

      
      let roleData = {
        title: title,
        salary: salary,
        department_name: department,
      };

    
      db.query("INSERT INTO role SET ?", roleData, function (err, results) {
        if (err) throw err;
        console.log(`Added Role!`);
        loadPrompts();
      });
    });
}





function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Employee First Name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "Employee Last Name?",
      },
      {
        type: "input",
        name: "department",
        message: "What is their Department?",
      },
      {
        type: "input",
        name: "job_title",
        message: "What is their Job Title?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is their salary?",
      },
      {
        type: "list",
        name: "manager",
        message: "Who is the employee's manager?",
        choices: ["Michael Scott", "Toby Flenderson", "Jan Levison"],
      },

    ])
    .then((res) => {
      let { first_name, last_name, department, job_title, salary, manager } = res;

 
      let employeeData = {
        first_name: first_name,
        last_name: last_name,
        department_name: department,
        job_title: job_title,
        salary: salary,
        manager_name: manager,
      };

    
      db.query("INSERT INTO employee SET ?", employeeData, function (err, results) {
        if (err) throw err;
        console.log(`Added Employee!`);
        loadPrompts();
      });
    });
}




function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "Employee's ID?",
      },
      {
        type: "list",
        name: "job_title",
        message: "What is the new employee's role?",
        choices: [
          "Manager",
          "Paper Salesmen",
          "Receptionist",
          "Human Resources",
          "Budget Management",
          "Warehouse Management",
          "Payroll",
          "Quality Assurance",
          "Whatever-Kevin-Does",
          "Assistant-to-the-Manager",
          "Human Resources Lead",
        ],
      },
    ])
    .then((res) => {
      
      let employeeRoleData = [res.job_title, res.id];

   
      db.query("UPDATE employee SET job_title = ? WHERE id = ?", employeeRoleData, function (err, results) {
        if (err) throw err;
        console.log(`Updated Employee Role!`);
        loadPrompts();
      });
    });
}








