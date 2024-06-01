import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../Utility/Localstorage";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// nothing will have to change in this code
const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width},${y + height}
     Z`
);

// nothing will have to change in this code
const TriangleBar = (props) => {
    const {
        fill, x, y, width, height,
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    const books = useLoaderData();  // all cards 
    const [ReadBookList, setReadBookList] = useState([]);

    useEffect(() => {
        const storedBookIds = getStoredReadBooks();  // ids (each card has unique id) that are added in local storage

        if (books && books.length > 0) {
            const ReadBooks = books.filter(book => storedBookIds.includes(book.bookId));
            setReadBookList(ReadBooks);
        }
    }, [books]);

    return (
        <div className='flex flex-grow justify-center items-center my-16'>
            {
                <BarChart width={600} height={300} data={ReadBookList}>  {/* customize: data, datakey */}
                    <XAxis dataKey="bookName" label={{ value: 'Book Name', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis label={{ value: 'Total Pages', angle: -90, position: 'insideLeft' }}/>
					          <Tooltip />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
                </BarChart>
            }
        </div>
    );
};

export default PagesToRead;


{/*
import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../Utility/Localstorage";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const PagesToRead = () => {
  const books = useLoaderData();  // all cards 
  const [ReadBookList, setReadBookList] = useState([]);

  useEffect(() => {
    const storedBookIds = getStoredReadBooks();  // ids (each card has unique id) that are added in local storage

    if (books && books.length > 0) {
      const ReadBooks = books.filter(book => storedBookIds.includes(book.bookId));
      setReadBookList(ReadBooks);
    }
  }, [books]);

  return (
    <div className='flex justify-center items-center my-12'>
      {
        <BarChart width={600} height={300} data={ReadBookList}>  
          <XAxis dataKey="bookName" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="totalPages" fill="#8884d8" barSize={30} />   {/* don't use {totalPages} we are not passing value */}
  {/*      </BarChart>
      }
    </div>
  );
};

export default PagesToRead;  */}

