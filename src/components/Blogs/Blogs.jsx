import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';

const Blogs = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books)

    return (
        <>
            <h1 className='text-4xl mt-12 font-bold text-center'>All Blog </h1>
            <div className='flex flex-wrap gap-5 my-12'>
                {
                    books.map((book) => (
                        <div key={book.id}>
                            <div className="card bg-slate-200 w-96 h-96 shadow-xl">
                                <figure>
                                    <img
                                        src={book.photourl}
                                        alt={book.name} />
                                </figure>
                                <div className="card-body">
                                    <button className='btn container mx-auto btn-square'>Book Review</button>
                                    <h2 className="card-title">{book.name}</h2>
                                    <p>{book.review}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
                <Footer></Footer>
        </>
    );
};

export default Blogs;