let myLibrary = [];
const display = document.getElementById("display");
const a = Book("hi", "hi", false, false, false, 0, 512);
//console.log(a);
myLibrary.push(a);
function Book(author, title, finished, inProgress, wantToRead, page, totalPages) {
    return {
        author,
        title,
        finished,
        inProgress,
        wantToRead,
        page,
        totalPages
    };
}
function addBookToLibrary(author, title, finished, inProgress, wantToRead, page, totalPages){
    myLibrary.push(Book(author, title, finished, inProgress, wantToRead, page, totalPages));
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
        const totalPage = document.createElement('td');
        totalPage.textContent = book.totalPages;
        row.appendChild(author);
        row.appendChild(title);
        row.appendChild(finished);
        row.appendChild(inProgress);
        row.appendChild(wantToRead);
        row.appendChild(page);
        row.appendChild(totalPage);
        display.appendChild(row);
    }
    
}
function showForm(){
    const form = document.getElementById("addBook");
    form.style.display="initial";
    const addBook = document.getElementById("addBook");
    addBook.addEventListener("submit", function(event){
        event.preventDefault();
        const title =event.target[0].value;
        const author =event.target[1].value;
        const finished =document.getElementById('finished').checked;
        const progress =document.getElementById('inProgress').checked;
        const want =document.getElementById('wantTo').checked;
        const page =event.target[5].value;
        const totalPage =event.target[6].value;
        addBookToLibrary(title, author, finished,
            progress, want, page, totalPage);
        displayBooks(myLibrary);
    }); 
}
function hideForm(){
    const form = document.getElementById("addBook");
    form.style.display="none";
}

displayBooks(myLibrary);
