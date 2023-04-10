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
    display.innerHTML="";
    for(let book of myLibrary){
        if(book.author == ""){
            myLibrary.pop(book);
        }
        else{
            const row = document.createElement('div');
            row.classList.add("book");
            const author = document.createElement('h1');
            author.textContent = book.author;
            const title = document.createElement('h1');
            title.textContent = book.title;
            const finished = document.createElement('button');
            finished.textContent = book.finished;
            const page = document.createElement('h4');
            page.textContent = book.page;
            const totalPage = document.createElement('h4');
            totalPage.textContent = book.totalPages;
            row.appendChild(author);
            row.appendChild(title);
            row.appendChild(finished);
            row.appendChild(page);
            row.appendChild(totalPage);
            display.appendChild(row);
        }
    }
    console.log(myLibrary);
}
function showForm(){
    const form = document.getElementById("addBook");
    form.style.visibility="initial";
    form.style.position="initial";
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
        hideForm();
        displayBooks(myLibrary);
        
    }); 
}
function hideForm(){
    const form = document.getElementById("addBook");
    form.reset();
    form.style.visibility="hidden";
    form.style.position="absolute";
}

displayBooks(myLibrary);
