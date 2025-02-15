/*3.Используя коллекцию Map и ее методы, реализуйте хранилище товаров. В корзине хранится информация о товаре: 
 id (ключ в коллекции Map), название, количество товара, цена. Разработайте функции, которые:   
- добавляют товар,  
- удаляют товар из списка по id,  
- удаляют товары по названию (учтите, что названия товаров могут повторяться),  
- изменяют количество каждого товара, 
- изменяют стоимость товара. 
Рассчитайте количество позиций в списке и сумму стоимости всех товаров. 
*/ 

let products1 = new Map(); 
 
function addProducts1(id, name, col, price) 
{ 
    products1.set(id, {name, col, price}); 
} 
function removeByID(id) 
{ 
    products1.delete(id); 
} 
function removeByName(name)  
{ 
    for (let [id, product1] of products1)  
    { 
      if (product1.name === name)  
      { 
        products1.delete(id); 
      } 
    } 
} 
function updateCol(id, newCol)  
{ 
    if (products1.has(id))  
    { 
      const product1 = products1.get(id); 
      product1.col = newCol; 
      products1.set(id, product1); 
    } 
} 
function updatePrice(id, newPrice)  
{ 
    if (products1.has(id))  
    { 
      const product1 = products1.get(id); 
      product1.price = newPrice; 
      products1.set(id, product1); 
    } 
} 
function getProductCount()  
{ 
    return products1.size; 
} 
function getTotalPrice()  
{ 
    let totalPrice = 0; 
    for (const product1 of products1.values())  
    { 
      totalPrice += product1.col * product1.price; 
    } 
    return totalPrice; 
} 
 
addProducts1(1, "Расческа", 2, 100); 
addProducts1(2, "Заколка", 1, 500); 
addProducts1(3, "Крабик", 3, 200); 
 
console.log(getProductCount());  
console.log(getTotalPrice());  
 
removeByID(2); 
console.log(getProductCount()); 
console.log(getTotalPrice());  
 
removeByName("Расческа"); 
console.log(getProductCount());  
console.log(getTotalPrice());  
 
updateCol(3,5); 
console.log(getTotalPrice());  
 
updatePrice(3, 250); 
console.log(getTotalPrice());  