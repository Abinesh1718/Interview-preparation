import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import axios from 'axios';

const ITEMS_PER_PAGE = 10;

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${ITEMS_PER_PAGE}`);
      const totalCount = parseInt(response.headers['x-total-count'], 10); // JSONPlaceholder does not provide total count, so you might need to handle this differently.
      setData(response.data);
      setTotalPages(Math.ceil(totalCount / ITEMS_PER_PAGE));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
