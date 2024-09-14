import React from 'react';
import './style.css'; // Ensure to add appropriate CSS for styling

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const getPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);

        if (startPage > 1) {
            pageNumbers.push(1);
            if (startPage > 2) pageNumbers.push('...');
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) pageNumbers.push('...');
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    const handleClick = (pageNumber) => { 
        if (pageNumber !== currentPage && pageNumber !== '...') {
            onPageChange(pageNumber);
        }
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="pagination">
            <button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            {pageNumbers.map((number, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(number)}
                    className={number === currentPage ? 'active' : ''}
                    disabled={number === '...'}
                >
                    {number}
                </button>
            ))}
            <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
