// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users = ["shaff","danial","huzaifa","imran","ahmed"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["uswa","shaff","warda","nimra","zainab"];


// • Loop through the new_users list to see if each new username has already been used.
//  If it has, print a message that the person will need to enter a new username.
//   If a username has not been used, print a message saying that the username is available.

for (const new_user of new_users) {
    if(current_users.includes(new_user))console.log("person need to enter new username");
    console.log("username is avaliable");
}