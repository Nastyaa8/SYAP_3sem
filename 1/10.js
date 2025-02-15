function func(greeting, input,name = "Hi"){
    input = prompt("введите строку", "");
    return `${greeting}, ${name} ${input}`;
}

let str = "Hallo"
alert(func("John", str));