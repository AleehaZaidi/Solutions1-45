const length1=2;
const width = 5;

if (length1 > 0 && width > 0) {
    const area = length1 * width;
    console.log("The area of the rectangle is:", area);
} else if (length1 <= 0 || width <= 0) {
    console.log("Both length and width must be greater than 0.");
} else {
    console.log("Invalid input values for length and width.");
}




