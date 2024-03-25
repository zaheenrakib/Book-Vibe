import MyImaged from '../images/cover.jpg'
const Home = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="lg:flex items-center justify-around flex-col lg:flex-row-reverse">
                    <img src={MyImaged} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-6xl w-3/4 font-bold">Books to freshen up your bookshelf</h1>
                        <button className="btn btn-success">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;