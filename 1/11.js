let a = prompt("Сторона a: ", 0);
let b = prompt("Сторона b: ", 0);
let str;

/*params = (sideA, sideB) => {
    if(sideA==sideB)
        return "Периметр квадрата = " + (sideA * 2 + sideB * 2);
    else
        return "Площадь прямоугольника = " + (sideA * sideB);
}*/

let f = function params(sideA, sideB){
    if(sideA == sideB)
        return "периметр квадрата = " + (sideA * 2 + sideB * 2);
    else
        return "площадь прямоугольника = " + sideA * sideB;
}        
if(a <= 0 || b <= 0) 
    alert("Фигура не существует")
else
    str = f(a, b)
    

alert(str);

/*function params(sideA, sideB){
    if(sideA == sideB)
        return "периметр квадрата = " + (sideA * 2 + sideB * 2);
    else
        return "площадь прямоугольника = " + sideA * sideB;
}*/   


