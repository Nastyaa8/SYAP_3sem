/*1.	Создайте объекты (Object) для фигур, представленных на картинке. 
Обратите внимание, фигуры имеют одинаковые параметры, следовательно одни объекты могут наследовать от других.
 помощью методов JS получите свойства, которые отличают фигуру «зеленый круг»; свойства, которые описывают фигуру «треугольник с тремя линиями»; 
 есть ли у фигуры «маленький квадрат» собственное свойство, которое определяет цвет фигуры.*/
const Shape = {
    type: '',
    color: '',
    size: '',
    get GetColor(){
        return this.color;
    }
};

const Circle = {
    type: 'circle',
    __proto__ : Shape
};

const Square = {
    __proto__ : Shape,
    type: 'square'
};

const Triangle = {
    __proto__ : Shape,
    type: 'triangle',
    sides: 3
};

const yellowSquare = {
    __proto__ : Square,
    color: 'yellow',
    size: 'large'
};

const smallYellowSquare = {
    __proto__ : Square,
    color: 'yellow',
    size: 'small'
};

const greenCircle = {
    __proto__ : Circle,
    color: 'green',
    size: 'large'
};

const triangleWithTwoLines = {
    __proto__ : Triangle,
    color: 'black',
    lines: 2
};

const triangleWithThreeLines = {
    __proto__ : Triangle,
    color: 'black',
    lines: 3
};

console.log(greenCircle.color); 
console.log('color' in smallYellowSquare);
console.log(triangleWithThreeLines.lines);

//2
/*2.	Реализуйте иерархию классов:
Human: содержит поля Имя, Фамилия, Возраст, Адрес. Методы, позволяющие изменить значения для возраста и адреса. 
Измените класс Human, добавив геттер и сеттер для возраста, 
который вычисляется  на основании года рождения, соответственно, добавив в класс новое поле Год рождения.
*/
class Human {
    constructor(firstName, lastName, birthYear, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._birthYear = birthYear;
        this._age = this.calculateAge();
        this.address = address;
    }

    get age() {
        return this._age;
    }

    get birthYear() {
        return this._birthYear;
    }

    set birthYear(year) {
        this._birthYear = year;
        this._age = this.calculateAge();
    }

    calculateAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this._birthYear;
    }

    setAddress(newAddress) {
        this.address = newAddress;
    }
}

class Student extends Human {
    constructor(firstName, lastName, birthYear, address, faculty, course, group, recordBookNumber) {
        super(firstName, lastName, birthYear, address);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.recordBookNumber = recordBookNumber;
    }

    updateCourseAndGroup(newCourse, newGroup) {
        this.course = newCourse;
        this.group = newGroup;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Faculty {
    constructor(name) {
        this.name = name;
        this.numberOfGroups = 0;
        this.numberOfStudents = 0;
        this.students = [];
    }

    updateNumberOfGroups(newNumber) {
        this.numberOfGroups = newNumber;
    }

    updateNumberOfStudents(newNumber) {
        this.numberOfStudents = newNumber;
    }

    addStudent(student) {
        this.students.push(student);
        this.numberOfStudents++;
    }

    getDev() {
        return this.students.filter(student => {
            const specialtyCode = student.recordBookNumber[1];
            return specialtyCode === '3';
        }).length;
    }

    getGroup(groupNumber) {
        return this.students.filter(student => student.group === groupNumber);
    }
}

const faculty = new Faculty("Факультет информационных технологий");
const student1 = new Student("Иван", "Иванов", 2000, "Минск", faculty.name, 2, "Группа 1", "71201301");
const student2 = new Student("Петр", "Петров", 2001, "Могилев", faculty.name, 1, "Группа 1", "71201303");
const student3 = new Student("Петр", "Петров", 2001, "Могилев", faculty.name, 1, "Группа 4", "73201305");
const student4 = new Student("Петр", "Петров", 2001, "Могилев", faculty.name, 1, "Группа 4", "73201306");
const student5 = new Student("Петр", "Петров", 2001, "Могилев", faculty.name, 1, "Группа 4", "73201307");

faculty.addStudent(student1);
faculty.addStudent(student2);
faculty.addStudent(student3);
faculty.addStudent(student4);
faculty.addStudent(student5);

console.log(faculty.getDev());
console.log(faculty.getGroup("Группа 1"));