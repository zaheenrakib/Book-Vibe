import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import Footer from '../Footer/Footer';

const PageToRead = () => {
  const [books, setBooks] = useState([]);
  const [readBooksId, setReadBooksId] = useState([]);
  const idInt = readBooksId.map((item) => parseInt(item));
  // console.log(idInt)

  // Data From APi F
  useEffect(() => {
    fetch('/book.json')
      .then(response => response.json())
      .then(data => setBooks(data))
  }, []);
  // console.log(books);

  //Data From Local Stortage
  useEffect(() => {
    const localDatas = localStorage.getItem('ReadBook');
    if (localDatas) {
      setReadBooksId(JSON.parse(localDatas));
    }
  }, []);
  // console.log(readBooksId);

  const matchedBooks = books.filter((book) => idInt.includes(book.bookId))
  // console.log(matchedBooks)

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
  };

  const data = 
    matchedBooks.map((readbook) => ({
      name: readbook.bookName,
      uv: readbook.totalPages,
      pv: 3800, // You can modify this value as needed
      amt: 2100, // You can modify this value as needed
    }))
  
  // console.log(data)

  return (
    <>
      <div className='flex items-center justify-center'>
        <BarChart
          width={1400}
          height={600}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />

          <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PageToRead;