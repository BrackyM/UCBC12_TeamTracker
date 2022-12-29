# Braxton M | UCBC12_TeamTracker | README

The objective of this Team Profile Generator is to learn more around SQL by creating a database through `MySQL Workbench` that allows you to view a company and their departments, roles, managers, employees, and wages. The options presented in the menu allow you to add or remove these variables within the database.

This allowed for a better understanding and practice of SQL and the components that drive the application. The project used the `seed.sql` and `schema.sql` to create the initial database of information for the menu to change.


## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Installation & Usage

This project uses Node.JS as well as a collection of other packages featured in the package-json. To install the packages type in your terminal `npm i`.

Create an `.env` file to store user information for SQL connection

To run the program type in your console `node index` to run the program.

To leave the program there is an option to `Quit` the application.

Note: Program is ran through MySQL Workbench and the Gitbash terminal within Visual Studio Code.


## Screenshot

Screenshot of the Application

* Employee Manager Viewing all Employees
![App Screenshot](./assets/screenshot1.JPG)


## Links

- [Video Walkthrough](https://drive.google.com/file/d/10UTwtxxf2Kh6VMeOAlmtPQHEiPrNpxxu/view?usp=sharing)
- [Github Project Repository](https://github.com/BrackyM/UCBC12_TeamTracker)

##  Contributors / Resouces Used
    
UC Berkley Tutoring 