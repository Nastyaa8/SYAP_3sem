// Создайте объект user, который имеет свойства firstName и lastName. 
// Добавьте геттер для получения полного имени и сеттер для изменения полного имени.

let user2 = {
    _firstname: "Kolya",
    _lastname: "Sidorov",
    get fullname(){
        return (`${this._firstname} ${this._lastname}`);
    },
    set fullname(fl){
        [this._firstname, this._lastname] = fl.split(' ');
    }
}
alert(user2.fullname);
user2.fullname = "Masha Ivanova";
alert(user2.fullname);