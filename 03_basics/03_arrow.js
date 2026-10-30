const user = {
    username : "irfan",
    price : 999,

    welcomeMessage : function(){
        // console.log(`${this.username}, welcome to the website`);
        // console.log(this);
        
        
    }

   
}

// user.welcomeMessage()
// user.username = "mahi";
// user.welcomeMessage()


// function chai(){
//     let username = "irfan"
//     console.log(this.username);
    
// }

//chai()

// const chai = () => {
//     let username = "irfan"
//     console.log(this);
    
// }

//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//console.log(addTwo(3,5));

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3,2));


// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,2));

const addTwo = (num1, num2) => ({username : "irfan"})
console.log(addTwo(3,2));