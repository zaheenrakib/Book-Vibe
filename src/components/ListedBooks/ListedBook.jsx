import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredJobApplication } from '../Utility/localStorage';

const ListedBook = () => {
    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    const handleReadBooksFilter = filter => {
        if(filter === 'all'){
            setDisplayBooks(readBooks);
        }
        else if(filter === 'popular'){
            const popularBooks = readBooks.filter(book => book.popurarity === "yes");
            setDisplayBooks(popularBooks);
        }
        else if(filter === 'unpopular'){
            const unpopularBooks = readBooks.filter(book => book.popurarity === "no");
            setDisplayBooks(unpopularBooks);
        }
    }


    useEffect(() => {
        const storedBookIds = getStoredJobApplication();
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

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <>
            <h2></h2>
            <div className="bg-slate-300 rounded-lg">
                <h1 className="p-8 text-center text-2xl font-bold">Book Vibe</h1>
            </div>

            <div>
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn m-5 bg-green-500 text-lg text-white">Sort By <span> <IoIosArrowDown />  </span> </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52">
                        <li onClick={() => {handleReadBooksFilter('all')}} ><a>All</a></li>
                        <li onClick={() => {handleReadBooksFilter('popular')}}><a>Popular</a></li>
                        <li onClick={() => {handleReadBooksFilter('unpopular')}}><a>Non-Popular</a></li>
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
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </TabPanel>
                <TabPanel>
                    <div className="card card-side m-5 bg-base-300 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side m-5 bg-base-300 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side m-5 bg-base-300 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default ListedBook;