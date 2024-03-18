// The following exercise contains the following subjects:
// ● functions
// Instructions
// Write a function that calculates the circle area by a given radius
// as an argument. Print the area as it is calculated and then print
// it rounded to two decimal places.
function calculateArea(radius) {
    let area = Math.PI * radius ** 2;

    console.log("The area of the circle: ", area);
    console.log("Rounded area: ", area.toFixed(2));
}