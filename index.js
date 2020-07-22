var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Anjola-Oluwa1998",
    database: "staff_db"
});


connection.connect(function (err) {
    if (err) throw err;

    start();
});


function start() {
    inquirer
        .prompt([
            {
                name: "initialOptions",
                type: "list",
                message: "What would you like to do?",
                choices: [
                    "View All Employees",
                    "View All Roles",
                    "View All Departments",
                    "Add Employee",
                    "Add Role",
                    "Add Department",
                    "Update Employee Role"
                ]
            }
        ])
        .then(function (answer) {
            if (answer.initialOptions === "View All Employees") {
                viewAllEmployees();
            }
            else if (answer.initialOptions === "View All Roles") {
                viewAllRoles();
            }
            else if (answer.initialOptions === "View All Departments") {
                viewAllDepartments();
            }
            else if (answer.initialOptions === "Add Employee") {
                addEmployee();
            }
            else if (answer.initialOptions === "Add Role") {
                addRole();
            }
            else if (answer.initialOptions === "Add Department") {
                addDepartment();
            }
            else if (answer.initialOptions === "Update Employee Role") {
                updateEmployeeRole();
            }
            else {
                connection.end();
            }
        });
};

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;

        console.table(res);
    })
};
function viewAllRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;

        console.table(res);
    })
};
function viewAllDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;

        console.table(res);
    })
};

function addEmployee() {
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "role_id",
                type: "input",
                message: "What is the employee's role id number?"
            },
            {
                name: "manager_id",
                type: "input",
                message: "What is the employee's manger's id number?"
            }
        ])
        .then(function (answer) {
            connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.first_name, answer.last_name, answer.role_id, answer.manager_id], function (err, res) {
                if (err) throw err;

                console.log("Employee added!");
            })


        })
};
function addRole() {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is official title of the role?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary of the role?"
            },
            {
                name: "department_id",
                type: "input",
                message: "What is the department id that the role is under?"
            }
        ])
        .then(function (answer) {
            connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.title, answer.salary, answer.department_id], function (err, res) {
                if (err) throw err;

                console.log("Role added!");
            })


        })
};
function addDepartment() {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the name of the department?"
            }
        ])
        .then(function (answer) {
            connection.query("INSERT INTO department (name) VALUES (?)", [answer.name], function (err, res) {
                if (err) throw err;

                console.log("Department added!");
            })


        })
};

// let fullNames;
function updateEmployeeRole() {
    var array = [];
    connection.query("SELECT first_name, last_name FROM employee", function (err, res) {
        if (err) throw err;

        array.push(...res);
        // console.log('this is res',res);
        // console.log('this is my array', Object.entries(res[0]));
        // var obj = JSON.parse(res);
        // console.log(obj);
        // array.push(obj);



        // console.log(array);
        // var fullNames = array.map(function(person) {
        //     return person.first_name + person.last_name;
        // });
        // console.log(fullNames);
        inquirer
            .prompt([
                {
                    name: "updateRoleEmployee",
                    type: "list",
                    message: "Which employee's role would you like to update?",
                    // choices: [array[0].first_name]
                    choices: array.map(function(person) {
                        return person.first_name + person.last_name;
                    })
                },
                {
                    name: "updatedRole",
                    type: "input",
                    message: "What is the employee's updated role id number?"
                }
            ]).then(function (answer) {
                connection.query("UPDATE employee SET role_id = ? WHERE name = ?", [answer.updatedrole, answer.updatedRoleEmployee], (err, res) => {
                    if (err) throw err;

                    console.log(`Employee ${answer.updatedRoleEmployee} has been updated!`)
                })

            })
    })
};