//const tinder = new Object(); //singleton objects

const tinder = {};//non singleton
tinder.id = "123abc";
tinder.name = "irfan";
tinder.isloggedin = false;

//console.log(tinder);

const regularUser = {
    email : "someone@001.com",
    fullname : {
        userfullname : {
            firstname : "irfan",
            lastname : "pathan",
        }
    }
}

//console.log(regularUser.fullname);

const obj = {1: "a", 2: "b", 3: "c", 4: "d"};
const obj2 = {5: "e", 6: "f", 7: "g", 8: "h"}

//const obj3 = {obj ,  obj2}
//const obj3 = Object.assign({} , obj, obj2)

const obj3 = {...obj, ...obj2}
console.log(obj3);



console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty("isloggedin"));







