// Создайте объект item со свойством price. 
// Сначала определите его с параметрами, 
// разрешающими изменение и удаление. 
// Затем переопределите дескрипторы так, чтобы свойство стало неизменяемым.


let item = {
    price: 1000
}

Object.defineProperties(item, {
    price:{writable: true, configurable: true}
})

alert(item.price);
item.price = 2000;
alert(item.price);

Object.defineProperties(item, {
    price:{writable: false, configurable: true}
})

item.price = 3000;
alert(item.price);
