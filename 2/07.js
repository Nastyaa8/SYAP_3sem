const greet= (name) =>{
    let message="Hello" + name +"!";
    return message;
};

console.log(greet("World"));
//function declaration
function greet(name){
    return "Hello"+name+"!";

}
let message=greet("John");
console.log(message);
//function expression
const greet=function(name){
    return "Hello"+ name;
}
let message=greet("John");
console.log(message);