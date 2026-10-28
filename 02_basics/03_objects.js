//objects literals 
const users = {
    name : "irfan",
    "full name " : "irfan pathan",
    age : 18,
    locations : "pune",
    email : "irfan@001.com",
    isloggedin : false,
    lastloginday : ["monday", "saturday"]

}

// console.log(users.email);
// console.log(users["email"]);


users.email = "irfanchatgpt@001";
//Object.freeze(users);


users.email = "mahi@001";
//console.log(users);

users.greeting = function(){
    console.log("hello js users");
    
}

users.greetingtwo  = function(){
    console.log(`hello js users , ${this.name}`);
    
} 

console.log(users.greeting());
console.log(users.greetingtwo());








