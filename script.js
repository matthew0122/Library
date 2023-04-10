let myLibrary = [];
const a = Book("hi", "hi", false, false, false, 0);
console.log(a);

function Book(author, title, finished, inProgress, wantToRead, page) {
    return {
        author,
        title,
        finished,
        inProgress,
        wantToRead,
        page
    };
}
function addBookToLibrary(author, title, finished, inProgress, wantToRead, page){
    myLibrary.push(Book(author, title, finished, inProgress, wantToRead, page));
}
