import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStorage";


const BookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
    const idInt = parseInt(bookId);
    const book = books.find((book) => book.bookId == bookId);
    console.log(book);

    const handleReadBook = () =>{
        saveJobApplication(idInt);
        toast('You  add Read BookList')
    }
    const handleWishlistBook = () =>{
        saveJobApplication(idInt);
        toast('You  add Wishlist BookList')
    }

    return (
        <>

        <h2>Book Deatis Of : {bookId} </h2>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-96 h-96" src={book.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{book.bookName}</h2>
                    <hr />
                    <h2>  By: {book.author} </h2>
                    <hr />
                    <p><span className="font-bold text-lg">Review:</span> {book.review} </p>
                    <h2><span className="font-bold text-lg">Tags:</span> {
                        book.tags.map((tag) => <span className="btn text-green-600" key={tag}> # {tag} </span>)
                    } </h2>
                    <hr />

                    <div>
                        <h2>Number Of Pages : {book.totalPages} </h2>
                        <h2>Publisher: : {book.publisher} </h2>
                        <h2>Year of Publishing: : {book.yearOfPublishing} </h2>
                        <h2>Rating : {book.rating}</h2>
                    </div>




                    <div className="card-actions">
                        <button onClick={handleReadBook} className="btn btn-primary">Read</button>
                        <button onClick={handleWishlistBook} className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>

        </>
    );
};

export default BookDetails;