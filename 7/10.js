// Создайте объект rectangle, который имеет свойства width и height. 
// Добавьте геттер для вычисления площади прямоугольника, геттеры и сеттеры для ширины и высоты. 


let rectangle = {
    _width: 10, 
    _height: 20,
    get width(){
        return this._width;
    },
    get height(){
        return this._height;
    },
    set width(w){
        this._width = w;
    },
    set height(h){
        this._height = h;
    },

    get sqr(){
        return this._height * this._width;
    }
}

alert(rectangle.height);//20
alert(rectangle.width);//10
alert(rectangle.sqr);