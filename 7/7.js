// Создайте объект circle, который имеет свойство radius. 
// Добавьте геттер для вычисления площади круга на основе радиуса, 
// геттер и сеттер для изменения радиуса.

let circle = {
    _radius: 10,
    get sqr(){
        return Math.PI * this._radius * this._radius;
    },
    set radius(rad){
        this._radius = rad;
    },
    get radius(){
        return this._radius;
    }
};

alert(circle.radius);//10
circle.radius = 20;
alert(circle.radius);
alert(circle.sqr);