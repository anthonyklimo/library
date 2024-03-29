let myLibrary = [];

let form = document.getElementById('bookForm');
let content = document.getElementById('content');
let addBookButton = document.getElementById('addBookButton');
let modal = document.getElementById('modal');
let submitButton = document.getElementById('submit');
let exitButton = document.getElementById('exitModal');

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        if(this.read == 'Read') {
            this.read = 'Not Read';
        } else {
            this.read = 'Read';
        }
    }
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

function removeBook(e) {
    const bookIndex = e.target.parentNode.dataset.bookNumber;
    console.log(bookIndex);
    // console.log(e.target.parentNode.dataset.bookNumber);
    myLibrary.splice(bookIndex, 1)
    e.target.parentNode.remove();
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
    
        bookCard.classList.add('bookCard');
        infoList.classList.add('infoList');
        bookTitle.classList.add('bookTitle');
        bookAuthor.classList.add('bookAuthor');
        bookPages.classList.add('bookPages');
        bookRead.classList.add('bookRead');
        bookRemove.classList.add('bookRemove');

        bookCard.dataset.bookNumber = myLibrary.indexOf(item);
        bookTitle.textContent = `Title:  ${item.title}`;
        bookAuthor.textContent = `Author:  ${item.author}`;
        bookPages.textContent = `Pages:  ${item.pages}`;
        bookRead.textContent = `${item.read}`;
        bookRemove.textContent = `Remove`;

        bookRead.addEventListener('click', function() {
            item.toggleRead();
            bookRead.textContent = `${item.read}`;
        });

        bookRemove.addEventListener('click', function(e) {
            removeBook(e);
        })
    
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