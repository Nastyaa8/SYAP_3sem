`use strict`

// task01
/*
Что выведет alert?На что ссылается [[Environment]] функций? Что будет содержать LexicalEnvironment при запуске функций? Что хранится в counter? Когда будет вызвана функция
*/


function makeCounter(){
    let currentCount = 1;

    return function(){  
        return currentCount++;
    };
}

let counter = makeCounter();

alert(counter());
alert(counter());
alert(counter());


let counter2 = makeCounter();
alert(counter2());



// let currentCount = 1;


// function makeCounter() {
    
//     return function() {  
        
//         return currentCount++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter()); // Выводит 1
// alert(counter()); // Выводит 2
// alert(counter2()); // Выводит 1
// alert(counter2()); // Выводит 2

