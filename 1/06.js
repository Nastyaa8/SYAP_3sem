let rusExam = confirm("Студент сдал экзамен по русскому?", false);
let mathExam = confirm("Студент сдал экзамен по математике?", false);
let engExam = confirm("Студент сдал экзамен по английскому?", false);
let exams;
if(rusExam && mathExam && engExam){
    alert("Студент сдал все экзамены");
    exams = true;
}

if(!(rusExam || mathExam || engExam)){
    alert("Студент отчислен");
    exams = false;
}
else{
    if(!rusExam){
    alert("Студент имеет персдачу по русскому")
    }
    if(!mathExam){
        alert("Студент имеет персдачу по математике")
    }
    if(!engExam){
        alert("Студент имеет персдачу по английскому")
    }
}
