// 1.	Создайте объект person с методами greet (сообщение с приветствием пользователя) 
// и ageAfterYears (принимает years и возвращает “текущий возраст” + years), которые используют 
// this для доступа к свойствам объекта.

let person = {
    name:"Вася",
    age: 18
}

person.greet = function(){
    alert("Привет, " + this.name);
}


person.ageAfterYears = function (years){
    return this.age + years;
}

person.greet();

alert(person.ageAfterYears(20));