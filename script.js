let myLibrary = [];
const display = document.getElementById("display");
const a = Book("hi", "hi", false, false, false, 0);
//console.log(a);
myLibrary.push(a);
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
function displayBooks(myLibrary){
    for(let book of myLibrary){
        const row = document.createElement('tr');
        const author = document.createElement('td');
        author.textContent = book.author;
        const title = document.createElement('td');
        title.textContent = book.title;
        const finished = document.createElement('td');
        finished.textContent = book.finished;
        const inProgress = document.createElement('td');
        inProgress.textContent = book.inProgress;
        const wantToRead = document.createElement('td');
        wantToRead.textContent = book.wantToRead;
        const page = document.createElement('td');
        page.textContent = book.page;
        row.appendChild(author);
        row.appendChild(title);
        row.appendChild(finished);
        row.appendChild(inProgress);
        row.appendChild(wantToRead);
        row.appendChild(page);
        display.appendChild(row);
    }
    
}
displayBooks(myLibrary);