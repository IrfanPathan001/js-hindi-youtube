const name = "irfan";
const repocount = 50;

//console.log(name + repocount + "mahii");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('irfanMahii');

console.log(gamename[0]);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(4));
console.log(gamename.indexOf('n'));

const newString = gamename.substring(0,4);
console.log(newString);

const anotherString = gamename.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  maka   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://irfan.com/irfan%30pathan";

console.log(url.replace('%30', '_'));

console.log(gamename.split('_'));








