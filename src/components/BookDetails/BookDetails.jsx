import { useLoaderData, useParams, useNavigation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { checkExist, saveBookList } from "../Utility/localStorage";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";


const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find((book) => book.bookId == bookId);

    const handleReadBook = () => {
        const saveData = checkExist('ReadBook', idInt);
        if (!saveData) {
            saveBookList('ReadBook', idInt);
            toast('You  add Read BookList')
        } else {
            toast.error('Its already been added ReadBook')
        }


    }
    const handleWishlistBook = () => {
        const savedData = checkExist('WishBook', idInt)
        const checkReadExist = checkExist('ReadBook', idInt);
        if (checkReadExist) {
            toast.error('Already Added Read List');
        }
        else {
            if (!savedData) {
                saveBookList('WishBook', idInt);
                toast('You add Wishlist BookList');
            } else {
                toast.error('Its already been added WishBook')
            }
        }





    }

    return (
        <>

            <h2 className="text-center font-bold">Book Deatis Of : {bookId} </h2>

            <div className="flex gap-2 h-screen bg-base-300 rounded-lg shadow-xl">
                <div className="flex-1">
                    <figure><img className="w-full h-screen rounded-lg" src={book.image} alt="Album" /></figure>
                </div>
                <div className="card-body  flex-1">
                    <h2 className="card-title">{book.bookName}</h2>
                    <hr />
                    <h2>  By: {book.author} </h2>
                    <hr />
                    <p><span className="font-bold w-1/2 text-lg">Review:</span> {book.review} </p>
                    <h2 className="space-x-2"><span className="font-bold text-lg">Tags:</span> {
                        book.tags.map((tag) => <span className="btn text-green-600" key={tag}> # {tag} </span>)
                    } </h2>
                    <hr />

                    <div className="space-y-4">
                        <h2>Number Of Pages : {book.totalPages} </h2>
                        <h2>Publisher: : {book.publisher} </h2>
                        <h2>Year of Publishing: : {book.yearOfPublishing} </h2>
                        <h2>Rating : {book.rating}</h2>
                    </div>




                    <div className="card-actions">
                        <button onClick={handleReadBook} className="btn border border-red-400">Read</button>
                        <button onClick={handleWishlistBook} className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
            <Footer></Footer>
        </>
    );
};

export default BookDetails;