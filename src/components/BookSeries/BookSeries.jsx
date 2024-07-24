import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';

const BookSeries = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('/book.json')
            .then(response => response.json())
            .then(data => setBooks(data))
    }, []);
    console.log(books)

    return (
        <>
            <div className="hero bg-base-200 mt-12">
                <div className=" flex gap-10 flex-col lg:flex-row">
                    <img
                        src="https://images.pexels.com/photos/19985255/pexels-photo-19985255/free-photo-of-a-book-lying-on-bed-sheets.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="rounded-lg max-h-[500px] flex-1 shadow-2xl" />
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">Book Series</h1>
                        <p className="py-6">
                            Yes, this is the section where we give you, our readers, our takes on book series. In other words, well review stories that span across multiple volumes of books, explain character growth, evaluate the plot, and publish checklists be it fantasy, drama, romance, or mystery.
                            This last bit is extremely helpful for new readers and nerds when you are picking up your first book of an author. We strongly believe that our opinions will play a significant role in shaping up your bookshelves and what “Collections” you have on them
                        </p>
                        <p>
                            I'm Rosie Langello, founder of Book Vibe. In 2005, I created Book Vibe to connect readers with stunning reads. My team and I have curated selections, and an all-knowing algorithm guides you to epic books.

                            I love taking my 9-year-old kid to any book fair near my home, especially in Shotwell. Often, he asks me, “Mom, tell me a story…” I smile again and again, then make him happy by telling stories from those books I have read.
                        </p>
                        <button className="btn mt-12 text-white btn-success">Contact</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap gap-5'>
                {
                    books.map((book) => (
                        <div key={book.bookId} className='mt-12'>
                            <div className="card bg-base-400 w-96 h-full  shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={book.image}
                                        alt={book.bookName}
                                        className="rounded-xl w-96 h-52" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{book.bookName}</h2>
                                    <p>{book.review}</p>
                                    <div className="card-actions">
                                        <button className="btn text-white btn-success">Read More</button>
                                    </div>
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

export default BookSeries;