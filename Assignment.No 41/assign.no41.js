"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const MagiciansArray = ["Harry Houdini", "David Copperfiel", "David Blaine"];
function show_magicianns(Magicians) {
    for (const magician of Magicians)
        console.log(magician);
}
show_magicianns(MagiciansArray);
