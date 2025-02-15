// Выполнить деструктуризацию объекта store до 3 уровня вложенности. 
// После этого вывести значения likesCount из массива posts. 
// Выполнить фильтрацию массива dialogs – выбрать пользователей с четными id.   
// В массиве messages заменить все сообщения на “Hello user” (использовать метод map).


let store = {
    state:{
        profilePage:{
            posts:[
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            newPostText: 'About me',
        },
        dialogsPage:{
            dialogs:[
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Victor'},
            ],
            messages:[
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'hi hi hi'},
            ],
        },
        sidebar: [],
    },
}
posts[1].message="Hi";

let {
    state:{
        profilePage:{
            posts,
        },
        dialogsPage:{
            dialogs,
            messages,
        },
    },
} = store;




for(let post of posts){
    alert(post.likesCount);

}

let filtering = dialogs.filter(item=> item.id % 2 == 0);
for(let dialog of filtering){
    alert(`${dialog.id} ${dialog.name}`);
}

store.state.dialogsPage.messages.map(item => item.message = "Hello user");
for(let curmessage of messages){
    alert(`${curmessage.id} ${curmessage.message}`);
}
