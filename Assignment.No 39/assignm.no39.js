"use strict";
//City Names: Write a function called city_country() that takes in the name of a city and its country. 
//The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city},${country}`;
}
const city1 = city_country("lahore", "pakistan");
const city2 = city_country("tokyo", "japan");
const city3 = city_country("New York", "USA");
console.log(city1);
console.log(city2);
console.log(city3);
