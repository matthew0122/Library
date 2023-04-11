let myLibrary = [];
const display = document.getElementById("display");
const a = Book("hi", "hi", false, false, false, 0, 512);

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
            author.textContent = "By: " + book.author;
            const title = document.createElement('h1');
            title.textContent =  book.title;
            const finished = document.createElement('button');
            finished.textContent = book.finished;
            const page = document.createElement('h4');
            page.textContent = "Current Page: " + book.page;
            const totalPage = document.createElement('h4');
            totalPage.textContent = "Total Pages: " + book.totalPages;
            const removeButton = document.createElement('button');
            removeButton.textContent="Remove";
            removeButton.author = author;
            removeButton.title=title.textContent;
            removeButton.addEventListener("click", removeBook);
            row.appendChild(title);
            row.appendChild(author);
            row.appendChild(finished);
            row.appendChild(page);
            row.appendChild(totalPage);
            row.appendChild(removeButton);
            display.appendChild(row);
        }
    }
    console.log(myLibrary);
}
function removeBook(event){
    for(let book of myLibrary){
        if("By: " + book.author == event.currentTarget.author.innerText){
            console.log(book.title);
            console.log(event.currentTarget.title);
            if(book.title = event.currentTarget.title){
                myLibrary.pop(book);
                break;
            }
        }
    }
    displayBooks(myLibrary);
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
        addBookToLibrary(author, title, finished,
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
