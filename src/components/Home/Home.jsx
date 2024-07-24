import { useEffect, useState } from 'react';
import MyImaged from '../images/cover.jpg'
import Book from '../Book/Book';
import { Link, useLoaderData} from 'react-router-dom';

const Home = () => {
    // const books = useLoaderData();
    
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch('book.json')
        .then(response => response.json())
        .then(data => setBooks(data))
    },[])

    return (
        <>
            <div className="hero lg:px-20 lg:py-10  rounded-lg bg-base-200">
                <div className="lg:flex items-center flex-col lg:flex-row-reverse">
                    <img src={MyImaged} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="lg:text-6xl text-2xl lg:w-3/4 font-bold">Books to freshen up your bookshelf</h1>
                        <Link to='/listedbooks'><button className="btn mt-12 text-white text-lg btn-success">View The List</button></Link>
                    </div>
                </div>
            </div>
            {/* Start Card Section */}
            <section className='mt-12'>
                <div>
                    <h1 className='text-center text-3xl font-bold'>Books</h1>
                </div>
                <div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 mb-12">
                        {
                            books.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </div>
            </section >
        </>
    );
};

export default Home;