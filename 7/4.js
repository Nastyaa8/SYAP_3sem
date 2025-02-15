// Создайте объект team, 
// который содержит массив игроков и метод для вывода информации о каждом игроке. 
// Используйте this в вложенной функции.


let team = {
    playears: [
        {name: "Вася", surname: "Сидоров", age: 18, pos: "вратарь"},
        {name: "Петя", surname: "Петров", age: 20, pos: "защитник"},
        {name: "Коля", surname: "Иванов", age: 19, pos: "нападающий"},
    ],
    getInformationAboutPlayear(){
        this.playears.forEach(function(playear){
            alert(`Имя: ${playear.name}, фамилия: ${playear.surname}, возраст: ${playear.age}, позиция: ${playear.pos}`)
        })
    }
}

team.getInformationAboutPlayear();