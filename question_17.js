// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

const guests = ['ali','ahmed','danial'];


for (const guest of guests) {
    console.log(`${guest} , you are invited to the dinner`);
}
console.log(`${guests[2]} cant make the dinner` );

guests[2] = "zain";


for (const guest of guests) {
    console.log(`${guest} , you are invited to the dinner`);
}

console.log("i found a bigger table!!!!")

guests.unshift("usama");

let start = 2;
let deleteCount = 0;
guests.splice(start, deleteCount, 'zeeshan');
guests.push("imran")
for (const guest of guests) {
    console.log(`${guest} , you are invited to the dinner`);
}


// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("i can invite only two people!!!");

// Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

const removedGuest1 = guests.pop("imran");
console.log(`${removedGuest1} , sorry i cant invite u to dinner`);


const removedGuest2 = guests.pop("zain");
console.log(`${removedGuest2} , sorry i cant invite u to dinner`);

const removedGuest3 = guests.pop("ahmed");
console.log(`${removedGuest3} , sorry i cant invite u to dinner`);

const removedGuest4 = guests.pop("zeeshan");
console.log(`${removedGuest4} , sorry i cant invite u to dinner`);

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program

guests.length = 0;
console.log(guests);