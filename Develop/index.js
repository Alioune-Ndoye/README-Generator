// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information:',

  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please select a license:',
    choices: ['MIT', 'Apache-2', 'GPL-3.0', 'BSD-3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide guidelines for contributing to the project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide testing instructions:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please provide your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please provide your email address:', 

  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
    console.log("README.md file created successfully!");
  } catch (error) {
    console.error("Error writing file:", error);
  }
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./utils/README.md", generateMarkdown({...answers}));
  });
    
  
}

// Function call to initialize app
init();
