


// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

const guests = ['ali','ahmed','danial'];


for (const guest of guests) {
    console.log(`${guest} , you are invited to the dinner`);
}
console.log(`${guests[2]} cant make the dinner` );

guests[2] = "zain";



for (const guest of guests) {
    console.log(`${guest} , you are invited to the dinner`);
}
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

console.log("i found a bigger table!!!!")

// Add one new guest to the beginning of your array.

guests.unshift("usama");


// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

let start = 2;
let deleteCount = 0;
guests.splice(start, deleteCount, 'zeeshan');
guests.push("imran")
for (const guest of guests) {
    console.log(`${guest} , you are invited to the dinner`);
}