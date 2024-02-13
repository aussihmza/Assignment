#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
async function CreateTodo(arr) {
    do {
        let ans = await inquirer.prompt({
            name: "options",
            type: "list",
            message: "Please select an opertaion",
            choices: ["add", "update", "view", "remove"]
        });
        if (ans.options == "add") {
            let addTodo = await inquirer.prompt({
                name: "add",
                type: "input",
                message: "Please add Todo",
            });
            todos.push(addTodo.add);
            console.log(todos);
        }
        if (ans.options == "update") {
            let updateTodo = await inquirer.prompt({
                name: "UTodo",
                type: "list",
                message: "Selet to update",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                name: "add",
                type: "input",
                message: "Please add Todo",
            });
            let newTodo = todos.filter(val => val !== updateTodo.UTodo);
            todos = [...newTodo, addTodo.add];
        }
        if (ans.options == "view") {
            console.log(todos);
        }
        if (ans.options == "remove") {
            let removeTodo = await inquirer.prompt({
                name: "RTodo",
                type: "list",
                message: "Selet to update",
                choices: todos.map(item => item)
            });
            let newTodo = [...todos.filter(val => val !== removeTodo.RTodo)];
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
CreateTodo(todos);
