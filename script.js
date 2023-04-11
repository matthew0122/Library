let myLibrary = [];
const display = document.getElementById("display");
const changeView = document.getElementById("makeSmall");
changeView.addEventListener("click", changeViewSize);
const a = Book("Carlos Ruiz Zafón", "La Sombra del Viento", false, true, false, 370, 569);

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
            finished.addEventListener("click", changeReadStatus)
            finished.classList.add("bookRead");
            finished.textContent = isItFinished(book.finished);
            const page = document.createElement('h4');
            page.textContent = "Current Page: " + book.page;
            const totalPage = document.createElement('h4');
            totalPage.textContent = "Total Pages: " + book.totalPages;
            const removeButton = document.createElement('button');
            removeButton.classList.add("remover");
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
    if(confirm(`Are you sure you want to remove: ${event.currentTarget.title}`))
    {
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
function changeReadStatus(event){
    console.log(event.target);
    if(event.target.innerText == "Finished"){
        event.target.innerText = "Not read";
    }
    else{
        event.target.innerText = "Finished";
    }
}
function isItFinished(status){
    if(status == "Finished" || status == "True"){
        return "Finished";
    }
    else{
        return "Not Read"; 
    }
}
function changeViewSize(){
    let stylesheet = document.querySelector("[rel='stylesheet']");
    if (changeView.innerText == "Small Mode"){
        changeView.innerText = "Large Mode";
        stylesheet.href ="styles.css";
    }
    else {
        changeView.innerText = "Small Mode";
        stylesheet.href ="smallmode.css";
    }
    displayBooks(myLibrary);
}


displayBooks(myLibrary);
