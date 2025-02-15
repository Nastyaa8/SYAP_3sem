//В массиве tasks хранится список задач. Создать новую задачу task и добавить ее в массив, используя spread оператор.


let tasks = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false},
    {id: 4, title: "Rest API", isDone: false},
    {id: 5, title: "GraphQL", isDone: false},
];

let newTask = {id: 10, title: "C#", isDone: false};

tasks = [ ...tasks, newTask];
for(let curtask of tasks){
    alert(`${curtask.id} ${curtask.title} ${curtask.isDone}`);
}
