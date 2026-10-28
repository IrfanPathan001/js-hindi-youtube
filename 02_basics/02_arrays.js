const marvel_heros = ["irfan", "mahii", "fiza"];

const dc_heros = ["nishan", "saniya", "pooja"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


const allheros = marvel_heros.concat(dc_heros);
//console.log(allheros);


const another_array = [1,2,3,[4,5,6],7,[6,7],[4,5]];

const real_another_array =  another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("irfan"));
console.log(Array.from("irfan"));
console.log(Array.from({name:"irfan"}));


