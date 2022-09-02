let myLibrary = [];

let form = document.getElementById('bookForm');

let content = document.getElementById('content');
let addBookButton = document.getElementById('addBookButton');
let modal = document.getElementById('modal');
let submitButton = document.getElementById('submit');
let exitButton = document.getElementById('exitModal');


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    makeBookCard(book);
}

function makeBookCard(book) {
    const bookCard = document.createElement('div');
    const infoList = document.createElement('ul');
    const bookTitle = document.createElement('li');
    const bookAuthor = document.createElement('li');
    const bookPages = document.createElement('li');
    const bookRead = document.createElement('button');
    const bookRemove = document.createElement('button');

    infoList.classList.add('infoList');
    bookCard.classList.add('bookCard');
    bookTitle.classList.add('bookTitle');
    bookAuthor.classList.add('bookAuthor');
    bookPages.classList.add('bookPages');
    bookRead.classList.add('bookRead');
    bookRemove.classList.add('bookRemove');

    bookTitle.textContent = `Title: ${book.title}`;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookPages.textContent = `Pages: ${book.pages}`;
    bookRead.textContent = `Read`;
    bookRemove.textContent = `Remove`;

    content.appendChild(bookCard);
    bookCard.appendChild(infoList);
    infoList.appendChild(bookTitle);
    infoList.appendChild(bookAuthor);
    infoList.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(bookRemove);
}

function newBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;

    if (document.getElementById('read').checked) {
        read = 'Read';
    } else {
        read = 'Not Read';
    }

    let book = new Book(title, author, pages, read)
    addBookToLibrary(book);
}



function openModal() {
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}


function submitBook() {
    newBook();
    form.reset();
    closeModal();

}

addBookButton.addEventListener('click', function() {
    openModal();

});

submitButton.addEventListener('click', function() {
    submitBook();
});

exitButton.addEventListener('click', function() {
    closeModal();
})







