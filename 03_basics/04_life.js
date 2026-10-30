//immediately invoked functions expressions

function chai(){
    console.log("database connected");
    
}
//chai()

(function chai(){
    console.log("db connected");
    
})();

(()=> {
    console.log("db connected two");
    
})()