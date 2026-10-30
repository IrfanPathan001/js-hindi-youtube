const useremail = "irfanPathan233@gmail.com";

if(useremail){
    console.log("got the users");
    
}else{
    console.log("dont have user email");
    
}


//falsey values

//false 0, -0, Bigint On, "", null, undefined, NaN


//truthy values 
//"o", "false", " ", [] , {}, function() {}


// if (useremail.length === 0){
//     console.log("Array is empty");
    
// } 

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("Objects is empty");
    
// }

//Nullesh coalescing operator (??): null undefined

let val1;

// val1 = 2 ?? 10;

val1 = null ?? 45;

console.log(val1);
