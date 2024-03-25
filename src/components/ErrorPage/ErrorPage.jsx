import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className='text-4xl text-red-500 mt-12 text-center'>Opps</h2>
            <Link className="btn" to='/'>Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;