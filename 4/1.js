/*1. Имеется список товаров. Реализуйте функции, которые добавляют, удаляют товар из списка, проверяет наличие товара.  
Определите количество имеющего товара. Используйте коллекцию Set.  */ 

let products = new Set(); 
 
function addProduct(product) 
{ 
    products.add(product); 
} 
 
function removeProduct(product) 
{ 
    products.delete(product); 
} 
 
function isProduct(product) 
{ 
   return products.has(product); 
} 
 
function countOfProduct() 
{ 
    return products.size; 
} 
 
addProduct("заколка"); 
addProduct("резинка"); 
addProduct("обруч"); 
addProduct("крабик"); 
addProduct("заколка"); 
console.log(isProduct("резинка")); 
console.log(isProduct("наушники")); 
console.log(countOfProduct()); 
removeProduct("крабик"); 
console.log(isProduct("крабик")); 
console.log(countOfProduct()); 
 
