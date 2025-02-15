// Создайте модуль counter, который инкапсулирует переменную count и предоставляет методы для инкрементации, 
// декрементации и получения текущего значения. 
// Используйте this для доступа к свойствам.


const counter = (function() {
    let count = 0;
    return{
        increment: function(){
            return ++count;
        },
        decrement: function(){
            return --count;
        },
        getCount:function(){
            return count;
        }
    }
        
    })();
    
alert(counter.increment()); // 1
alert(counter.increment()); // 2
alert(counter.decrement()); // 1
alert(counter.getCount());