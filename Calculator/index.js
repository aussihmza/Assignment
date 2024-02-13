#!/usr/bin/env node
// for beautification we intall node banner//
// npm i node-banner
import { sum } from "./add.js";
import { sub } from "./substract.js";
import { mul } from "./multiply.js";
import { div } from "./divide.js";
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
(async () => {
    await showBanner('Calculator', 'This calculator can perform addition, subtraction, multiplication & division', "red", "blue");
})();
let answer = await inquirer.prompt([
    {
        message: "Enter your First number:",
        type: "number",
        name: "num1",
    }, {
        message: "Enter your Secound number:",
        type: "number",
        name: "num2"
    },
    {
        name: "Operators",
        type: "list",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
        message: "Select your operator:"
    }
]);
if (answer.Operators === "Addition") {
    let result0 = sum(answer.num1, answer.num2);
    console.log(chalk.bgGreenBright(`Your result is: ${result0}`));
}
else if (answer.Operators === "Substraction") {
    let result1 = sub(answer.num1, answer.num2);
    console.log(chalk.bgCyan(`Your result is: ${result1}`));
}
else if (answer.Operators === "Multiplication") {
    let result2 = mul(answer.num1, answer.num2);
    console.log(chalk.bgCyanBright(`Your result is: ${result2}`));
}
else if (answer.Operators === "Division") {
    let result3 = div(answer.num1, answer.num2);
    console.log(chalk.bgGreenBright(`Your result is: ${result3}`));
}
