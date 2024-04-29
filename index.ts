#!usr/bin/env/node
import inquirer from "inquirer";
let todos = []; //shopper[]
let condition = true;

while (condition) {
  let todoQuestion = await inquirer.prompt([
    {
      name: "firstQuestion",
      message: "what would you lik to add in your Todos?",
      type: "input",
    },
    {
      name: "secondQuestion",
      message: "would you like  to add more in yout Todos?",
      type: "confirm",
      default: "true",
    },
  ]);

  todos.push(todoQuestion.firstQuestion);
  console.log(todos);
  //the loop is running on the based of this variable condition
  condition = todoQuestion.secondQuestion;
}
