var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Anjola-Oluwa1998",
  database: "staff_db"
});


connection.connect(function(err) {
  if (err) throw err;
  start();
});


function start() {
  inquirer
    .prompt({
      name: "initialOptions",
      type: "list",
      message: "What would you like to do?",
      choices: [
            "View All Employees",
            "View All Employees By Department",
            "View All Employees By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "View All Roles"
        ]
    })
    .then(function(answer) {
      if (answer.choice === "View All Employees") {
        
      }
      else if(answer.choice === "View All Employees By Department") {
        
      }
      else if (answer.choice === "View All Employees By Manager") {

      }
      else if (answer.choice === "Add Employee") {

      }
      else if (answer.choice === "Remove Employee") {

      }
      else if (answer.choice === "Update Employee Role") {

      }
      else if (answer.choice === "Update Employee Manager") {

      }
      else if (answer.choice === "View All Roles") {

      }
       else{
        connection.end();
      }
    });
}