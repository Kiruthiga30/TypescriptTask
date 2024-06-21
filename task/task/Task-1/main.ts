import { RectangleImp, CircleImp } from "./shapeClass";
//function to calculate the area of rectangle or circle
function getArea(shape: { calculateArea(): number }): void {
    console.log("The area of the given shape:", `${shape.calculateArea()}`);
}
//instance of the class
const myRectangle = new RectangleImp(30, 6);
const myCircle = new CircleImp(22);
//print the area using the function
getArea(myRectangle);
getArea(myCircle);
//defining explicitly instances of the class
const customRectangle = {
    height: 12,
    width: 20,
    calculateArea: function () {
        return this.height * this.width;
    }
};
getArea(customRectangle);
const customCircle = {
    radius: 45,
    calculateArea: function () {
        return Math.PI * this.radius * this.radius;
    }
}
getArea(customCircle);