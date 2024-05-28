//complete this code
class Rectangle {
	constructor(width, height){
		this._width = width;
		this._height = height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this.height;
	}
	getArea(){
		return this.width * this._height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
		this._side=side;
	}
	getPerimeter(){
		return 4 * this._side;
	}
}
const rectangle = new Rectangle(5,10);
console.log(rectangle.getArea());

const square = new Square(7);
console.log(square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

