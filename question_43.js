
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



const Magicians = ["shaff","khan","danial","ahmad"];
const MagiciansCopy = [];
const make_great = (Magicians)=>{
    for (let rep=0;rep<Magicians.length;rep++) {
        MagiciansCopy[rep] = "the great "+ Magicians[rep];
    }
}

const show_magicians = (Magicians) => {
    for (const magician of Magicians) {
        console.log(magician);
    }
}
make_great(Magicians);
show_magicians(MagiciansCopy);
show_magicians(Magicians);
