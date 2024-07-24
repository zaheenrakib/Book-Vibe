const getSavedBooks = (booktype) => {
    const storedBook = localStorage.getItem(booktype);
    if (storedBook) {
        return JSON.parse(storedBook);
    }
    return [];
}

const checkExist = (bookType,id) =>{
    const storedBook = getSavedBooks(bookType);
    const exits = storedBook.find(bookID => bookID === id);
    return exits;
}

const saveBookList = (bookType,id) =>{
    const storedBooks = getSavedBooks(bookType);
    const exits = storedBooks.find(bookID => bookID === id);
    if (!exits) {
        storedBooks.push(id);
        localStorage.setItem(bookType, JSON.stringify(storedBooks));
    }
}

export { getSavedBooks, saveBookList,checkExist }