import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright.bold("\n \t\t Wellcome to Sara - words counter \n"));
console.log("~".repeat(60));

let answer = await inquirer.prompt([
    {
      name: "sentence",
      type: "input",
      message: "Enter your sentence: "  
    }
]);
let words =answer.sentence.trim().split(" ");

console.log("~".repeat(60));
console.log(chalk.bold("\n- Sentence words: \n"));
console.log(words);
console.log(chalk.bold(`\n Total words: ${chalk.magenta.bold(words.length)}`));
console.log("~".repeat(60));
