import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getSavedBooks } from '../Utility/localStorage';
import { CiLocationOn } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import { MdInsertPageBreak } from "react-icons/md";


const ListedBook = () => {
    // const books = useLoaderData();

    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch('/book.json')
        .then(response => response.json())
        .then(data => setBooks(data))
    },[books])
    console.log(books)

    const [readBooks, setReadBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    // Wishlist Books
    const [wishlistBooks , setWishlistBooks] = useState([]);
    const [displayWishlistBooks, setDisplayWishlistBooks] = useState([]);

    const handleReadBooksFilter = filter => {
        if (filter === 'rating') {
            setDisplayBooks(readBooks);
        }
        else if (filter === 'numberofpages') {
            const popularBooks = readBooks.filter(book => book.popurarity === "yes");
            setDisplayBooks(popularBooks);
        }
        else if (filter === 'publishedyear') {
            const unpopularBooks = readBooks.filter(book => book.popurarity === "no");
            setDisplayBooks(unpopularBooks);
        }
    }


    useEffect(() => {
        const storedBookIds = getSavedBooks('ReadBook');
        if (books.length > 0) {
            const readBooks = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    readBooks.push(book);
                }
            }
            setReadBooks(readBooks);
            setDisplayBooks(readBooks);
        }
    }, [books])

    //Wishlist Books Use Effect
    useEffect(() => {
        const storedBookIds =  getSavedBooks('WishBook');
        if (books.length > 0) {
            const wishlistBooks = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    wishlistBooks.push(book);
                }
            }
            setWishlistBooks(wishlistBooks);
            setDisplayWishlistBooks(wishlistBooks);
        }
    }, [books])

    console.log(wishlistBooks);

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <>
            <h2></h2>
            <div className="bg-slate-300 rounded-lg">
                <h1 className="p-8 text-center text-2xl font-bold">Book Vibe</h1>
            </div>

            <div className='flex justify-center'>
                <div className="dropdown ">
                    <div className='flex left-0'>
                        <div tabIndex={0} role="button" className="btn m-5  bg-green-500 text-lg text-white">Sort By <span> <IoIosArrowDown />  </span> </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content flex flex-col justify-center items-center  z-[1] menu p-2 shadow bg-base-300 rounded-box w-52">
                        <li onClick={() => { handleReadBooksFilter('rating') }} ><a>Rating</a></li>
                        <li onClick={() => { handleReadBooksFilter('numberofpages') }}><a>Number Of Pages</a></li>
                        <li onClick={() => { handleReadBooksFilter('publishedyear') }}><a> Published year</a></li>
                    </ul>
                </div>
            </div> 

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>

                    <h1>Read Book Length : {readBooks.length} </h1>
                    {
                        displayBooks.map(book =>
                            <div key={book.bookId} className="card card-side m-5 bg-base-300 shadow-xl">
                                <figure><img className='w-96' src={book.image} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{book.bookName}</h2>
                                    <p> By : {book.author}</p>
                                    <div className='flex items-center gap-6'>
                                        <h2><span className="font-bold text-lg">Tags:</span> {
                                            book.tags.map((tag) => <span className="btn text-green-600" key={tag}> # {tag} </span>)
                                        } </h2>
                                        <h2 className='flex items-center gap-2'>
                                            <CiLocationOn /> Year Of Publishing : {book.yearOfPublishing}
                                        </h2>
                                    </div>
                                    <div className='flex gap-5'>
                                        <h2 className='flex items-center text-lg gap-2'><LuUsers2 /> Publisher : {book.publisher} </h2>
                                        <h2 className='flex items-center text-lg gap-2'> <MdInsertPageBreak /> Page: {book.totalPages}</h2>
                                    </div>
                                    <div className="card-actions">
                                        <button className="btn rounded-lg text-blue-600 ">Category: {book.category} </button>
                                        <button className="btn rounded-lg text-green-400">Rating : {book.rating}</button>
                                        <button className="btn rounded-lg btn-success">View Details</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </TabPanel>
                <TabPanel>
                    <h1>Wishlist Book Length : {wishlistBooks.length} </h1>

                    {
                        displayWishlistBooks.map(book =>
                            <div key={book.bookId} className="card card-side m-5 bg-base-300 shadow-xl">
                                <figure><img className='w-96' src={book.image} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{book.bookName}</h2>
                                    <p> By : {book.author}</p>
                                    <div className='flex items-center gap-6'>
                                        <h2><span className="font-bold text-lg">Tags:</span> {
                                            book.tags.map((tag) => <span className="btn text-green-600" key={tag}> # {tag} </span>)
                                        } </h2>
                                        <h2 className='flex items-center gap-2'>
                                            <CiLocationOn /> Year Of Publishing : {book.yearOfPublishing}
                                        </h2>
                                    </div>
                                    <div className='flex gap-5'>
                                        <h2 className='flex items-center text-lg gap-2'><LuUsers2 /> Publisher : {book.publisher} </h2>
                                        <h2 className='flex items-center text-lg gap-2'> <MdInsertPageBreak /> Page: {book.totalPages}</h2>
                                    </div>
                                    <div className="card-actions">
                                        <button className="btn rounded-lg text-blue-600 ">Category: {book.category} </button>
                                        <button className="btn rounded-lg text-green-400">Rating : {book.rating}</button>
                                        <button className="btn rounded-lg btn-success">View Details</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </TabPanel>
            </Tabs>
        </>
    );
};

export default ListedBook;