const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: (input) => {
        if (input.length <= 3) {
          return true;
        }
        return 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):',
      default: 'red', 
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Select a shape:',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):',
      default: 'red', 
    },
  ])
  .then((answers) => {
    const { text, textColor, shapeType, shapeColor } = answers;

    const shape = createShape(shapeType);
    shape.setColor(shapeColor);

    const svgString = `<svg width="300" height="200">${shape.render()}<text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text></svg>`;

    fs.writeFile('logo.svg', svgString, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  });

function createShape(shapeType) {
  switch (shapeType) {
    case 'circle':
      return new Circle();
    case 'square':
      return new Square();
    case 'triangle':
      return new Triangle();
    default:
      throw new Error('Invalid shape type');
  }
}


