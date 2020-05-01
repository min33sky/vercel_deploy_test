import React from 'react';
import Pagination from '../Pagination';
import './BoardPage.css';

function BoardPage({ onPaginate, onClickPost, posts, pagination, fetching }) {
  return (
    <div className='BoardPage'>
      <h1>게시글</h1>
      <ul className='posts'>
        {posts.map((post, idx) => {
          return (
            <li key={idx} onClick={() => onClickPost(post)}>
              {post}
            </li>
          );
        })}
      </ul>
      <Pagination
        pagination={pagination}
        onPaginate={onPaginate}
        disabled={fetching}
      />
    </div>
  );
}

export default BoardPage;
