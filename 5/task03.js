/* 3. Пользователь управляет движением объекта, вводя в модальное окно  команды left, right, up, down. 
 Объект совершает 10 шагов в заданном направлении (т.е. высчитываются и выводятся в консоль соответствующие  
координаты) и запрашивает новую команду. Разработайте генератор, который возвращает координаты объекта, 
согласно заданному направлению движения. */ 
console.log("task3"); 
function* moveObjectGenerator()  
{ 
  let currentX = 0; 
  let currentY = 0; 
 
  while (true)  
  { 
    const userDirection = yield { x: currentX, y: currentY }; 
 
    switch (userDirection)  
    { 
      case "left": 
        currentX = currentX - 10; 
        break; 
      case "right": 
        currentX = currentX + 10; 
        break; 
      case "up": 
        currentY = currentY + 10; 
        break; 
      case "down": 
        currentY = currentY - 10; 
        break; 
      default: 
        break; 
    } 
 
    console.log(`Новые координаты: x:${currentX}, y:${currentY}`); 
  } 
} 
 
const objectMover = moveObjectGenerator(); 
objectMover.next(); 
 
for (let i = 0; i < 10; i++)  
{ 
  const userCommand = prompt("Введите команду (left/right/up/down): "); 
  objectMover.next(userCommand); 
}