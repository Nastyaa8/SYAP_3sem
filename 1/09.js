let week = {
    1:"Понедельник",
    2:"Вторник",
    3:"Среда",
    4:"Четверг",
    5:"Пятница",
    6:"Суббота",
    7:"Воскресенье",
    8:"День не выбран"
}

let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье","День не выбран"]
let userChoice = prompt("Выберите день недели",8)
alert(week[userChoice] + ("(массив)"));
alert(week[userChoice] + ("(объект)"));