#!/usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "UserID",
        type: "input",
        message: "Please enter your id"
    },
    {
        name: "Password",
        type: "password",
        message: "Please enter your Password"
    },
    {
        name: "AccountType",
        type: "list",
        choices: ["Current", "saving"],
        message: "Please select account type"
    },
    {
        name: "Transaction",
        type: "list",
        choices: ["FastCash", "Widthwrall", "BalanceInquiry"],
        message: "Please select transction type ",
        when(answer) {
            return answer.AccountType;
        }
    },
    {
        name: "amount",
        type: "list",
        choices: [1000, 2000, 3000, 5000, 10000],
        message: "Please select your amount ",
        when(answer) {
            return answer.Transaction == "FastCash";
        },
    },
    {
        name: "amount",
        type: "input",
        message: "Please enter your amount ",
        when(answer) {
            return answer.Transaction == "Widthwrall";
        },
    },
]);
const balance = Math.floor(Math.random() * 10000000);
//console.log(balance)
if (answer.Transaction == "BalanceInquiry") {
    console.log(`Your account balance is : `, balance);
}
if (answer.UserID && answer.Password) {
    const Eamount = answer.amount;
    if (balance >= Eamount) {
        const remainingBlnc = balance - Eamount;
        console.log("Your remaining balance is: ", remainingBlnc);
    }
}
