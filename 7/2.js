// Создайте объект car, который имеет свойства model и year, 
// а также метод getInfo, 
// который выводит информацию о машине.



let car = {
    model: "Opel",
    year: 2019,
    getInfo(){
        alert(`Модель машины - ${this.model}, год выпуска - ${this.year}`);
    }
}

car.getInfo();