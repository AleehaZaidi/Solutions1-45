"use strict";
const current_users = ["bobby", "tommy", "jack"];
const new_users = ["Jack", "wolf", "tommy", "tonny"];
for (const newNickname of new_users) {
    const isTaken = current_users.some(username => username.toLowerCase() == newNickname.toLowerCase());
    if (isTaken) {
        console.log(`Sorry, the nickname '${newNickname}' is taken. Please choose another one.`);
    }
    else {
        console.log(`Great! The nickname '${newNickname}' is available. Welcome to the party!`);
        current_users.push(newNickname);
    }
}
