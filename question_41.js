// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const Magicians = ["shaff","khan","danial","ahmad"];

const show_magicians = (Magicians) => {
    for (const magician of Magicians) {
        console.log(magician);
    }
}

show_magicians(Magicians);