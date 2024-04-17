#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// check and install dependencies
function installDependencies() {
  console.log('Checking for PostCSS and Tailwind CSS...');
  execSync('npm install postcss tailwindcss', { stdio: 'inherit' });
}

installDependencies();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the destination directory (where to copy the file)
const baseDirectory = process.cwd(); // Current working directory

// Define the solidbee folder path
const solidbeeDirectory = path.join(baseDirectory, 'solibee');

//   Create the solidbee directory if it doesn't exist
fs.mkdir(solidbeeDirectory, { recursive: true }, (err) => {
  if (err) {
    return console.error('Error creating solidbee directory:', err);
  }
});

// paste TailwinCSS and PostCSS config to the root

const tailwindPath = path.join(__dirname, './config/tailwind.config.js');
const postcssPath = path.join(__dirname, './config/postcss.config.js');

// const destinationDirectory = process.cwd();
const tailwindDestinationFilePath = path.join(
  solidbeeDirectory,
  'tailwind.config.js'
);
const PostcssDestinationFilePath = path.join(
  solidbeeDirectory,
  'postcss.config.js'
);

fs.copyFile(tailwindPath, tailwindDestinationFilePath, (err) => {
  if (err) {
    console.error('Error copying file:', err);
  } else {
    console.log('File copied successfully to %s.', tailwindDestinationFilePath);
  }
});

fs.copyFile(postcssPath, PostcssDestinationFilePath, (err) => {
  if (err) {
    console.error('Error copying file:', err);
  } else {
    console.log('File copied successfully to %s.', PostcssDestinationFilePath);
  }
});

const command = process.argv[2];
switch (command) {
  case 'create-InputForm':
    // Define the source file (file to copy)
    const sourceFilePath = path.join(__dirname, './components/InputForm.jsx');

    // Define the destination file path (new destination inside solidbee folder)
    const destinationFilePath = path.join(solidbeeDirectory, 'InputForm.jsx');

    // Copy the file
    fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
      if (err) {
        console.error('Error copying file:', err);
      } else {
        console.log('File copied successfully to %s.', destinationFilePath);
      }
    });

    break;

  case 'create-ToDoList':
    const todoPath = path.join(__dirname, './components/ToDoList.tsx');
    const destinationToDoFilePath = path.join(
      solidbeeDirectory,
      'ToDoList.tsx'
    );
    fs.copyFile(todoPath, destinationToDoFilePath, (err) => {
      if (err) {
        console.error('Error copying file:', err);
      } else {
        console.log('File copied successfully to %s.', destinationToDoFilePath);
      }
    });
    break;

  case 'create-GenerateOTP':
    const GOTPPath = path.join(__dirname, './components/GenerateOTP.tsx');
    const destinationGOTPFilePath = path.join(
      solidbeeDirectory,
      'GenerateOTP.tsx'
    );
    fs.copyFile(GOTPPath, destinationGOTPFilePath, (err) => {
      if (err) {
        console.error('Error copying file:', err);
      } else {
        console.log('File copied successfully to %s.', destinationGOTPFilePath);
      }
    });
    break;

  case 'create-InputFile':
    const InputFilePath = path.join(__dirname, './components/InputFile.jsx');
    const destinationInputFileFilePath = path.join(
      solidbeeDirectory,
      'InputFile.jsx'
    );
    fs.copyFile(InputFilePath, destinationInputFileFilePath, (err) => {
      if (err) {
        console.error('Error copying file:', err);
      } else {
        console.log(
          'File copied successfully to %s.',
          destinationInputFileFilePath
        );
      }
    });
    break;

  case 'create-InputOTP':
    const InputOTPPath = path.join(__dirname, './components/InputOTP.jsx');
    const destinationInputOTPFilePath = path.join(
      solidbeeDirectory,
      'InputOTP.jsx'
    );
    fs.copyFile(InputOTPPath, destinationInputOTPFilePath, (err) => {
      if (err) {
        console.error('Error copying file:', err);
      } else {
        console.log(
          'File copied successfully to %s.',
          destinationInputOTPFilePath
        );
      }
    });
    break;

  default:
    console.error('Unknown command');
    process.exit(1);
}
