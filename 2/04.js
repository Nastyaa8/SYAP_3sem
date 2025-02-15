let str = prompt("Введите строку ","")

function f(string){
    let newString = "";
    for(let i = 0; i < string.length; i++){
        if( (string[i] >= "A" && string[i] <= "Z") ||
        (string[i] >= "a" && string[i] <= "z")){
            newString += string[i];
        }
    }
     
    string = "";
    
    for(let i = newString.length - 1; i >= 0; i--){
        string += newString[i];
    }
    return string;
}

alert(f(str)) 