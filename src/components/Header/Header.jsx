import { Link,} from "react-router-dom";

const Header = () => {
    const links = <>
        <Link to='/'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Home</li></Link>
        <Link to='/listedbooks'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Listed Books</li></Link>
        <Link to='/pagetoread'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Page To Readed</li></Link>
        <Link to='/bookseries'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Book Series</li></Link>
        <Link to='/blogs'><li className='btn btn-success btn-outline px-6 rounded-tl-3xl rounded-br-3xl'>Blogs</li></Link>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="font-bold text-2xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-5 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                <a className="btn btn-success text-white">Sign In</a>
                <a className="btn btn-accent text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;