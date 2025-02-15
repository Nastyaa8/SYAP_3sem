let teacherName = "Кудлацкая Марина Федоровна";
let inputString = prompt("Введите имя преподавателя: ", "");


function searchSubstring(subString, string){
    if(string.includes(subString))
        return "Преподаватель найден"
    else 
        return "Результаты поиска отсутствуют"
}
alert(searchSubstring(inputString.toUpperCase(), teacherName.toUpperCase()));