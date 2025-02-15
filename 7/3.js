// Создайте функцию-конструктор Book, 
// которая создает объекты с методами getTitle и getAuthor.


function Book(){
    this.title = "Book";
    this.author = "author";
    this.getTitle = function(){
        return this.title;
    }
    this.getAuthor = function(){
        return this.author;
    }
}

let book = new Book();
alert(book.getTitle());
alert(book.getAuthor());