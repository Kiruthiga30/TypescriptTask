import { Rectangle, Circle } from "./shapeInterface";
//implement the rectangle using interface
export class RectangleImp implements Rectangle {
    constructor(public height: number, public width: number) { }
    calculateArea(): number {
        return this.height * this.width;
    }
}
//implement the circle using interface
export class CircleImp implements Circle {
    constructor(public radius: number) { }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}