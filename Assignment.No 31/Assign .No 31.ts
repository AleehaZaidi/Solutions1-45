
// //! Sample list of users
let users = ["user1", "user2", "user3"];

//todo Check if the list is empty
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    //! Print the list of users
    console.log("Current list of users:", users);
    
    //todo Clear the list of users
    users = [];
    console.log("User list cleared. New list of users:", users);
}

