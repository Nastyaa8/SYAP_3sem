
 
/*4.Создайте коллекцию WeakMap для кеширования результатов функции. WeakMap должен содержать  
входные параметры функции и результаты расчета.  Функция должна выполняться только в том случае,  
если в кэше нет данных, иначе – берем данные из WeakMap.*/ 
 

const cache = new WeakMap(); 
 
function cachedFunction(func)  //возвращает новую функцию, которая будет кэшировать результаты вызова
{ 
  return function(...args)  
  { 
    if (cache.has(func) && cache.get(func)[args])  
    { 
      console.log('Данные взяты из кэша'); 
      return cache.get(func)[args]; 
    } 
 
    const result = func(...args); 
 
    if (!cache.has(func))  
    { 
      cache.set(func, {}); 
    } 
 
    cache.get(func)[args] = result; 
 
    console.log('Результаты вычислений сохранены в кэше'); 
    return result; 
  }; 
} 
 
 
function calculateExpensiveValue(base, exponent)  
{ 
  console.log('Выполняется вычисление...'); 
  return Math.pow(base, exponent); 
} 
 
const cachedCalculate = cachedFunction(calculateExpensiveValue); 
 
console.log(cachedCalculate(2, 3));  
console.log(cachedCalculate(2, 3));  
console.log(cachedCalculate(4, 2));  
console.log(cachedCalculate(4, 2));