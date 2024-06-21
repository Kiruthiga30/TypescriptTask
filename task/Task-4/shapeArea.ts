//interface for rectangle
interface Rectangle {
  kind: "Rectangle";
  height: number;
  width: number;
}
//interface for circle
interface Circle {
  kind: "Circle";
  radius: number;
}
//union type
type Shape = Rectangle | Circle;
//function of typeguard
function isRectangle(shape: Shape): shape is Rectangle {
  return shape.kind === "Rectangle";
}
function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "Circle";
}
//function to calculatearea
function calculateArea(shape: Shape) {
  if (isRectangle(shape)) {
    return shape.height * shape.width;
  } else if (isCircle(shape)) {
    return Math.PI * shape.radius * shape.radius;
  } else {
    console.error("Invalid Shape");
  }
}
//eg
const rectangle: Rectangle = { kind: "Rectangle", height: 23, width: 55 };
const circle: Circle = { kind: "Circle", radius: 44 };
console.log("The area of the given shape:", calculateArea(rectangle));
console.log("The area of the given shape:", calculateArea(circle));
