// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

const numbers = [1,2,3,4,5,6,7,8,9];

for (const number of numbers) {
    if(number==1){
        console.log(`${number}st \n`);
    }else if(number==2){
        console.log(`${number}nd \n`);
    }else if(number==3){
        console.log(`${number}rd \n`);
    }else if(number>3){
        console.log(`${number}th \n`);
    }
}