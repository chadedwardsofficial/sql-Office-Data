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
            name: "Update Department",
            value: "update_department",
          },
          {
            name: "Update Employee",
            value: "update_employee",
          },
          {
            name: "Update Role",
            value: "update_role",
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
        case "update_department":
          updateDepartment();
          break;
        case "update_employee":
          updateEmployee();
          break;
        case "update_role":
          updateRole();
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
        type: "list",
        name: "department",
        message: "Which department does the role belong to?",
        choices: ["Accounting", "Sales", "Management", "Human Resources", "Warehouse"],
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
        type: "list",
        name: "department",
        message: "What department are they in?",
        choices: ["Accounting", "Sales", "Management", "Human Resources", "Warehouse"],
      },
      {
        type: "list",
        name: "job_title",
        message: "What is the employee's role?",
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












// When application starts, loads prompts

// Prompt User a  List of things they'd want to do

// -- Add Department              DONE
// -- Add Employee                DONE
// -- Add Role                    DONE
// -- View ALl Departments        DONE
// -- View AlL Employees          DONE
// -- View ALL Roles              DONE
// - Quit

// When User Selects Add Department , runs addDepartment() Function which prompts another inquirer prompt to Type in Department Name and ID

// When User Selects Add Employee , runs addEmployee() Function which prompts another inquirer prompt to Type in first_name, last_name, role_id, manager_id, department_id

// When User Selects Add Role , runs addRole() Function which prompts another inquirer prompt to Type in role_id, title, salary, and department_id

// After Each Add Function, have an Update Department/Employee/Role Function

// When user Selects View ALL Departments, it runs a query to show all Departments in a Table in the Command Line. console.table ---

// When user Selects View ALL Roles, it runs a query to show all Roles in a table in the command line. console.table ---

// When user Selects View ALL Employees, it runs a query to show all Employees in a table in the command line. console.table ---
