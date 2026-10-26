  //primitive data type

  //7 types : String , Number , Boolean , Null ,Undefind, Symbol , Bigint

  const score = 100;
  const scorevalue = 100.3;

  const isloggedin = false;
  const outsidetemp = null;

  let userEmail;

  const id = Symbol('123');
  const anotherid = Symbol('123');
  //console.log(id === anotherid);

  const Bignumbers = 59780583063487563n;
  //console.log(Bignumbers);



  //Non Primitive data type

  //Array, Objects, Functions

  //Arrays
  const heros = ["irfan" , "mahii"]
  //console.log( typeof heros);

//Objects
  let names = {
    name :"irfan",
    age : 22,
  }

  //console.log(names);

  //Functions
  const myfunctions = function(){
    console.log("hello world");
    
}
  
  
console.log(typeof scorevalue);
console.log(typeof outsidetemp);

console.log(typeof null);
console.log(typeof heros);
console.log(typeof names);




