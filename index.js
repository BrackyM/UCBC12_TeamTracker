const db = require("./db");
const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
require("console.table");

init();

function init() {
    const logoContent = logo({ name: "Employee Manager"}).render();
    console.log(logoContent);
    MainMenu();
}

function MainMenu() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "Please select an option",
            choices: [
                {
                    name: "View ALL Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View ALL Employees By Department",
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "View ALL Employees By Manager",
                    value: "VIEW_EMPLOYEES_BY_MANAGER"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Remove Employee",
                    value: "REMOVE_EMPLOYEE"
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "Update Employee Manager",
                    value: "UPDATE_EMPLOYEE_MANAGER"
                },
                {
                    name: "View ALL Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Remove Role",
                    value: "REMOVE_ROLE"
                },
                {
                    name: "View ALL Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Remove Department",
                    value: "REMOVE_DEPARTMENT"
                },
                {
                    name: "View Total Utilized Budget By Department",
                    value: "VIEW_UTILIZED_BUDGET_BY_DEPARTMENT"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;

        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewAllEmployees();
            break;
            case "VIEW_EMPLOYEES_BY_DEPARTMENT":
                departmentEmployees();
            break;
            case "VIEW_EMPLOYEES_BY_MANAGER":
                viewEmployeesByManager();
            break;
            case "ADD_EMPLOYEE":
                addEmployee();
            break;
            case "REMOVE_EMPLOYEE":
                removeEmployee();
            break;
            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
            break;
            case "UPDATE_EMPLOYEE_MANAGER":
                updateEmployeeManager();
            break;
            case "VIEW_ROLES":
                viewRoles();
            break;
            case "ADD_ROLE":
                addRole();
            break;
            case "REMOVE_ROLE":
                removeRole();
            break;
            case "VIEW_DEPARTMENTS":
                viewDepartments();
            break;
            case "ADD_DEPARTMENT":
                addDepartment();
            break;
            case "REMOVE_DEPARTMENT":
                removeDepartment();
            break;
            case "VIEW_UTILIZED_BUDGET_BY_DEPARTMENT":
                viewUtilizedBudgetByDepartment();
            break;
            default:
                quit();
        }
    })

    function viewAllEmployees() {
        
    }

    function departmentEmployees(){
        
    }

    function viewEmployeesByManager(){

    }

    function removeEmployee() {

    }

    function updateEmployeeRole() {

    }

    function updateEmployeeManager() {

    }

    function viewRoles() {

    }

    function addRole() {

    }

    function removeRole() {

    }

    function viewDepartments() {

    }

    function addDepartment() {

    }

    function removeDepartment() {

    }

    function viewUtilizedBudgetByDepartment() {

    }

    function addEmployee() {

    }
}

function quit() {
    console.log("Closing Program");
    process.exit();
}