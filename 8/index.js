
/* 1. Выполнить глубокое копирование всех объектов и массивов. Использовать spread оператор. */
/*1*/ 
let  user = { 
    name: 'Masha', 
    age: 21 
};

console.log("task 1");
let copyUser = {...user};
console.log(copyUser);

/*2*/ 
let numbers = [1, 2, 3]; 

let copyNumbers = [...numbers];
console.log(copyNumbers); 

/*3*/ 
let user1 = { 
    name: 'Masha', 
    age: 23, 
    location: { 
        city: 'Minsk',
        country: 'Belarus'
    }
};

let copyUser1 = { 
    ...user1, 
    location: {...user1.location} 
};

console.log(copyUser1);
/*4*/
let user2 = { 
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"] 
};

 let copyUser2 = {
    ...user2,
    skills: [user2.skills[0]]
};
console.log(copyUser2);

/*5*/ 
const array = [ 
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

let copyArray = array.map(el => ({...el})); 
console.log(copyArray);

/*6*/
let user4 = { 
    name: 'Masha',
    age: 19,
    studies: { 
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: { 
            maths: true,
            programming: false
        }
    }
};
 let copyUser4 = {
    ...user4,
    studies: {...user4.studies,
    exams: {...user4.exams}
}
};
console.log(copyUser4);

/* 2. Обратитесь к копии объекта user5 и измените значение свойства group на 12,
 а оценку по программированию измените на 10.*/
 console.log("task 2");
let user5 = { 
    name: 'Masha',
    age: 22,
    studies: { 
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: { 
            faculty: 'FIT',
            group: 10,
        },
        exams: [ 
            { maths: true, mark: 8},
            { programming: true, mark: 4},
        ]
    }
};

let copyUser5 = structuredClone(user5);
copyUser5.studies.department.group = 12; 
copyUser5.studies.exams[1].mark = 10; 
copyUser5.studies.department.faculty = 'PIM';
console.log(user5);
console.log(copyUser5);


/* 3. Обратитесь к копии объекта user6 и измените имя преподавателя.*/
console.log("task 3");
let user6 = { 
    name: 'Masha',
    age: 21,
    studies: { 
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: { 
            faculty: 'FIT',
            group: 10,
        },
        exams: [ 
            { 
		maths: true,
		mark: 8,
		professor: { 
		    name: 'Ivan Ivanov ',
		    degree: 'PhD'
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Petrov',
		    degree: 'PhD'
		}
	     },
        ]
    }
};

let copyUser6 = structuredClone(user6);
copyUser6.studies.exams[0].professor.name = "Соленок Настя"; 
console.log(copyUser6);


/* 4. Обратитесь к копии объекта user7 и измените количество страниц на 3 для статьи
 “About CSS” преподавателя Petr Ivanov. */
console.log("task 4");
let user7 = { 
    name: 'Masha',
    age: 20,
    studies: { 
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: { 
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: { 
		    name: 'Ivan Petrov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: { 
		    name: 'Petr Ivanov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
        ]
    }
};
let copyUser7 = {
    ...user7,
    studies: {
        ...user7.studies,
        department: {
            ...user7.studies.exams.map(exam => ({
                ...exam, 
                professor: {
                    ...exam.professor,
                    articles: exam.professor.articles.map(article => ({...article}))
                }
            }))
        }

    }
    
};
copyUser7.studies.exams[1].professor.articles[1].pagesNumber = 3; 
console.log(copyUser7);

/* 5. Замените все сообщения в объекте store на “Hello”. */
console.log("task 5");
let store = {
    state: {
        profilePage: { 
            posts: [ 
                { id: 1, message: 'Hi', likeCount: 12 },
                { id: 2, message: 'By', likeCount: 1 },
            ],
            newPostText: 'About me',
        },
        dialogsPage: { 
            dialogs: [ 
                { id: 1, name: 'Valera' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Victor' },
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hi hi' },
                { id: 3, message: 'hi hi hi' },
            ],
        },
        sidebar: [], 
    },
};

let copeStore = structuredClone(store);
copeStore.state.dialogsPage.messages = copeStore.state.dialogsPage.messages.map(function(m){
    return m = {id: m.id, message: "Hello"}; });
console.log(copeStore);

