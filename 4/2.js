
/*2.Используя коллекцию Set создайте список студентов. О каждом студенте содержится информация: номер зачетки, группа, ФИО. Создайте функции, которые: 
- добавляют студента,  
- удаляют по номеру,  
- фильтруют список по группе,  
- сортируют по номеру зачетки.  
*/ 

let students = new Set(); 
 
function addStudent(student) 
{ 
    students.add(student); 
} 
 
function removeStudent(studentId) { 
  const toRemove = []; 
  students.forEach((student) => { 
      if (student.studentId === studentId) { 
          toRemove.push(student); 
      } 
  }); 
  toRemove.forEach((student) => students.delete(student)); 
} 
 
function filterStudent(group) { 
  const filtered = []; 
  students.forEach((student) => { 
      if (student.group === group) { 
          filtered.push(student); 
      } 
  }); 
  console.log(filtered); 
} 
 
 
function sortStudent() 
{ 
    return Array.from(students).sort((a, b) => a.studentId - b.studentId); 
} 
addStudent({studentId: 123, group: "10", fio: "Кирпиченко Вика"}); 
addStudent({studentId: 456, group: "8", fio: "Рублевская Маргарита"}); 
addStudent({studentId: 789, group: "10", fio: "Сахаревич Екатерина"}); 
addStudent({studentId: 369, group: "9", fio: "Соленок Настя"}); 
 
filterStudent("10"); 
removeStudent(123); 
filterStudent("10"); 
 
console.log(sortStudent()); 
 
