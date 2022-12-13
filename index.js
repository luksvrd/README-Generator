// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generatorMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Please provide a brief description of your project.",
  },
  {
    type: "input",
    name: "Installation",
    message: "What steps are required to install your project?",
  },
  {
    type: "input",
    name: "Usage",
    message: "How is the app used? Give instructions for usage.",
  },
  {
    type: "input",
    name: "Github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "Email",
    message: "What is your Email contact?",
  },
  {
    type: "input",
    name: "Collaborators",
    message: "Who are the collaborators on this project?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license applies to your project?",
    choices: ["Apache", "MIT", "Mozilla", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    }

    console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generatorMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
