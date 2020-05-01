import React from 'react';
import './Pagination.css';

function Pagination({ disabled, pagination, onPaginate }) {
  return (
    <ul className={`Pagination ${disabled ? 'disabled' : ''}`}>
      {new Array(pagination.totalPage).fill(1).map((_, idx) => {
        const page = idx + 1;

        return (
          <li
            key={idx}
            className={`${page === pagination.page ? 'active' : ''}`}
            onClick={() => onPaginate(page)}
          >
            {page}
          </li>
        );
      })}
    </ul>
  );
}

export default Pagination;
