// 2.	Объект user имеет свойства name, age. 
// Создайте объект admin, у которого есть свойства admin и все свойства объекта user. Используйте spread оператор.
let user = {
    name: "Aleksey",
    age: 18,
}

let admin = {admin: "Админ", ...user};
for(let key in admin){
    alert(`${key}: ${admin[key]}`);
}
