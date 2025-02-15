let str = prompt("Введите строку ", "")
let count = prompt("Введите количество повторений строки", 1)

function repeat(s, n){
    let string = ""
    for(let i = 0; i < n; i++){
        string += s;
    }
    return string;
}

alert(repeat(str, count))
