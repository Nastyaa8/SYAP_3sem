/* 1. Создайте класс Task, который описывает задачу из списка дел (Todolist). У каждой задачи есть id,
 название и состояние «выполнена» или «не выполнена». Реализуйте соответствующие методы, для изменения 
 названия задачи и ее состояния.  */

class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.completed = false; 
    }

   
    changeTitle(newTitle) {
        this.title = newTitle;
    }

  
    toggleCompletion() {
        this.completed = !this.completed;
    }
}
/* 2. Создайте класс Todolist, который представляет список дел. Список дел имеет id, название и метод,
 который его изменяет. Класс имеет метод, который добавляет новую задачу Task в список дел. Класс должен
  содержать метод, который фильтрует задачи по состоянию. */

class Todolist {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.tasks = []; 
    }

    
    changeTitle(newTitle) {
        this.title = newTitle;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    
    filterTasks(completed) {
        return this.tasks.filter(task => task.completed === completed);
    }
    getAllTasks() {
        return this.tasks;  
    }
}


/* 3. Создайте несколько списков Todolist. Продемонстрируйте работу с классами Todolist и Task. */
// Создание нескольких списков Todolist
const workList = new Todolist(1, "список 1");
const personalList = new Todolist(2, "список 2");


const task1 = new Task(1, "сдать курсач");
const task3 = new Task(2, "поспать");
const task2 = new Task(3, "купить продукты");
const task4 = new Task(4, "убраться");
const task5 = new Task(5, "почистить зубы");

workList.addTask(task1);
personalList.addTask(task2);
personalList.addTask(task3);
workList.addTask(task4);
personalList.addTask(task5);
 task4.changeTitle("сдать лабы");


task1.toggleCompletion(); 
task2.toggleCompletion();
task5.toggleCompletion();




const completedTasks_1 = personalList.filterTasks(true);
const incompleteTasks_1 = personalList.filterTasks(false);
const completedTasks_2 = workList.filterTasks(true);
const incompleteTasks_2 = workList.filterTasks(false);
const allTasks = workList.getAllTasks();
console.log("Все задачи:", allTasks);


console.log("завершенные задачи из списка 1:", completedTasks_1);
console.log("незавершенные задачи из списка 1:", incompleteTasks_1);

console.log("завершенные задачи из Рабочего списка 2:", completedTasks_2);
console.log("незавершенные задачи из Рабочего списка 2:", incompleteTasks_2);

