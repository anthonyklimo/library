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
    myLibrary.push(book);
}

function addCard() {
    content.innerHTML = '';
    myLibrary.forEach(function(item) {
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

        bookCard.dataset.volume = myLibrary.indexOf(item);
        bookTitle.textContent = `Title:  ${item.title}`;
        bookAuthor.textContent = `Author:  ${item.author}`;
        bookPages.textContent = `Pages:  ${item.pages}`;
        bookRead.textContent = `${item.read}`;
        bookRemove.textContent = `Remove`;
    
        content.appendChild(bookCard);
        bookCard.appendChild(infoList);
        infoList.appendChild(bookTitle);
        infoList.appendChild(bookAuthor);
        infoList.appendChild(bookPages);
        bookCard.appendChild(bookRead);
        bookCard.appendChild(bookRemove);             
        });
}

function openModal() {
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

function toggleRead(book) {
    if(book.read == 'Read') {
        book.read = 'Not Read';
    } else {
        book.read = 'Read';
    }
}

addBookButton.addEventListener('click', function() {
    openModal();
});

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    newBook();
    addCard();
    form.reset();
    closeModal();
});

exitButton.addEventListener('click', function() {
    closeModal();
})