const Circle = require('../lib/Circle');
const Square = require('../lib/Square');
const Triangle = require('../lib/Triangle');

describe('Shape classes', () => {
    describe('Circle', () => {
        it('should render correct SVG for Circle', () => {
            const circle = new Circle();
            circle.setColor('red');
            circle.setText('Hello');
            circle.setShapeColor('blue');
            const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Hello</text></svg>`;
            expect(circle.render()).toBe(expectedSVG);
        });
    });

    describe('Square', () => {
        it('should render correct SVG for Square', () => {
            const square = new Square();
            square.setColor('red');
            square.setText('Hello');
            square.setShapeColor('green');
            const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="30" height="30" stroke="black" fill="green" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Hello</text></svg>`;
            expect(square.render()).toBe(expectedSVG);
        });
    });

    describe('Triangle', () => {
        it('should render correct SVG for Triangle', () => {
            const triangle = new Triangle();
            triangle.setColor('red');
            triangle.setText('Hello');
            triangle.setShapeColor('blue');
            const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Hello</text></svg>`;
            expect(triangle.render()).toBe(expectedSVG);
        });
    });
});