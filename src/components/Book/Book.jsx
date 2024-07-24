// import MyImaged from '../images/cover.jpg'
import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
``

const Book = ({ book }) => {
    const { bookId, bookName, author, image, category, rating,tags } = book;
    return (
        <div>
            <div className="card mt-10 w-96  cursor-pointer bg-base-100 shadow-xl">

                <Link to={`/book/${bookId}`}>
                    <figure className="px-10 pt-10">
                        <img src={image} className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body">
                        <div className='flex gap-8'>
                            <h2><span className="font-bold text-lg"></span> {
                                tags.map((tag) => <span className="text-green-600" key={tag}> # {tag} </span>)
                            } </h2>
                        </div>
                        <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                        <p>{author}</p>
                        <hr className='border-dashed border-green-500' />
                        <div className="flex justify-between">
                            <h1 className="">{category}</h1>
                            <div className='flex items-center gap-5 text-lg'>
                                <h1>{rating} </h1>
                                <span> <FaRegStar /> </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.shape({
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        bookId: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
}

export default Book;