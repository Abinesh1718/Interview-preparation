import React, { useState } from 'react';

function PaginationExample() {
  const data = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const start = (page - 1) * itemsPerPage;
  const paginatedData = data.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Easy Pagination</h3>

      <ul>
        {paginatedData.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div style={{ marginTop: '10px' }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span style={{ margin: '0 10px' }}>Page {page} of {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default PaginationExample;
