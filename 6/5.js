// 5.	Массив [1, 2, 3] передайте в качестве параметра функции sumValues. Используйте spread оператор.

function sumValues(x, y, z){
    return x + y + z;
}

alert(sumValues(...[1, 2, 3]));