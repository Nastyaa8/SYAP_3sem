let students = [
    { name: 'Вика', age: 18, groupId: 1 },
    { name: 'Вероника', age: 20, groupId: 6 },
    { name: 'Настя', age: 16, groupId: 1 },
    { name: 'Ксюша', age: 19, groupId: 6 },
    { name: 'Алиса', age: 21, groupId: 3 }
  ];
  
    function groupStudentsByAge(students) 
    {
      const result = {};
    
      students.forEach(student => 
        {
        if (student.age > 17) 
        {
          const groupId = student.groupId;
    
          if (result[groupId]) 
          {
            result[groupId].push(student);
          } 
          else 
          {
            result[groupId] = [student];
          }
        }
      }
      );
    
      return result;
    }
  
  let groupedStudents = groupStudentsByAge(students);
  console.log(groupedStudents);