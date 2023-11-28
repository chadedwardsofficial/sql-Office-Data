const inquirer = require("inquirer");
const db = require("./connection.js");

loadPrompts();

function loadPrompts(){
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
  })
};

function quit() {
  process.exit();
}

function viewDepartments() {
  db.query(
    "SELECT department.id , department.name FROM department ",
    function (err, results) {
      console.table(results);
    }
  );
}

function addDepartment() {
  inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the Department?",
    },
  ]).then(res => {
    let name = res;
    db.query("INSERT INTO department SET ?", name, function (err, results) {
      console.log(`Added Department!`);
      
    });
  })
  .then(() => console.log("Added Department!") )
  .then(() => loadPrompts() );
}

// When application starts, loads prompts

// Prompt User a  List of things they'd want to do

// -- Add Department
// -- Add Employee
// -- Add Role
// -- View ALl Departments
// -- View AlL Employees
// -- View ALL Roles
// - Quit

// When User Selects Add Department , runs addDepartment() Function which prompts another inquirer prompt to Type in Department Name and ID

// When User Selects Add Employee , runs addEmployee() Function which prompts another inquirer prompt to Type in first_name, last_name, role_id, manager_id, department_id

// When User Selects Add Role , runs addRole() Function which prompts another inquirer prompt to Type in role_id, title, salary, and department_id

// After Each Add Function, have an Update Department/Employee/Role Function

// When user Selects View ALL Departments, it runs a query to show all Departments in a Table in the Command Line. console.table ---

// When user Selects View ALL Roles, it runs a query to show all Roles in a table in the command line. console.table ---

// When user Selects View ALL Employees, it runs a query to show all Employees in a table in the command line. console.table ---
