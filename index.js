
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: [],
      name: '',
    },
  ])
  .then(res => {
 let choice = res.choice;
   





}) ;










  // When application starts, loads prompts

  // Prompt User a  List of things they'd want to do 
  
  // -- Add Department 
  // -- Add Employee 
  // -- Add Role 
  // -- View ALl Departments 
  // -- View AlL Employees
  // -- View ALL Roles


  // When User Selects Add Department , runs addDepartment() Function which prompts another inquirer prompt to Type in Department Name and ID

  // When User Selects Add Employee , runs addEmployee() Function which prompts another inquirer prompt to Type in first_name, last_name, role_id, manager_id, department_id
  
  // When User Selects Add Role , runs addRole() Function which prompts another inquirer prompt to Type in role_id, title, salary, and department_id

  // After Each Add Function, have an Update Department/Employee/Role Function

  // When user Selects View ALL Departments, it runs a query to show all Departments in a Table in the Command Line. console.table --- 
  
  // When user Selects View ALL Roles, it runs a query to show all Roles in a table in the command line. console.table --- 

  // When user Selects View ALL Employees, it runs a query to show all Employees in a table in the command line. console.table ---