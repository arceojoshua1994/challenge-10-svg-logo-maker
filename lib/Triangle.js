const Shape = require('./Shape');

class Triangle extends Shape {
  render() {
    return '<polygon points="100,0 200,200 0,200" fill="${this.color}" />';
  }
}

module.exports = Triangle;
