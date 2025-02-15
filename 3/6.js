function createTower(numFloors) 
  {
    let tower = [];
  
    for (let i = 1; i <= numFloors; i++) 
    {
      let spaces = " ".repeat(numFloors - i);
      let stars = "*".repeat(i * 2 - 1);
      let floor = spaces + stars + spaces;
      tower.push(floor);
    }
  
    return tower;
}
  
let tower = createTower(3);
console.log(tower);