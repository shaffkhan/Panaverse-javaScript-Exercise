// Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

const usernames = ["staff","admin","client","developer","manager"];

for (const username of usernames ) {
    if(username === "admin") console.log("hello admin,would you like to see a status report?");
    console.log(`hello ${username},thank you for logging in again`);
}