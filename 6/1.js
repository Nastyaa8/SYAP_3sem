// 	Имеется массив numbers. Сохранить первый элемент массива в переменную y используя деструктуризацию.

let numbers = ["first", "second", "third"];
let [y,...u] = numbers;
alert(u[0]);

