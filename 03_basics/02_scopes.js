// let a = 10;
// const b = 20;
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


//global scope
let a = 100;

if(true){ //block scope
    let a = 10;
    const b = 20;
    var c = 30
    //console.log("inner scope = " ,a );
    
}

//console.log(a);

//nested scope

function one(){
    const username = "irfan";

    function two(){
        const website = "youtube";
        console.log(username);
        

    }
    //console.log(website);

    two();
    
}

//one();

if(true){
    const username = "mahi";
    if(username === "mahi"){
        const website = "youtube";
        console.log(username + website);
        
    }

    //console.log(website);
    
}

//console.log(username);


// +++++++ interesting +++++++
function addone(num){
    return num + 1;

}

console.log(addone(10));


const addTwo = function(num){
    return num + 10;
}

console.log(addTwo(30));
