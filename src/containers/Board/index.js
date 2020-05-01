import React, { useState, useEffect, useCallback } from 'react';
import { fetchPosts } from '../../utils/api';
import BoardPage from '../../components/BoardPage';
import Modal from '../../components/Modal';

function Board() {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    page: 0,
    size: 0,
    totalPages: 0,
  });
  const [modalShown, setModalShown] = useState(false);
  const [post, setPost] = useState(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    // 게시물들을 로드하는 함수 호출
    fetchData();
  }, []);

  const fetchData = useCallback((page) => {
    setFetching((v) => !v);
    fetchPosts(page || 1).then((data) => {
      setPosts(data.posts);
      setPagination({
        ...data.pagination,
      });
      setFetching((v) => !v);
    });
  }, []);

  const toggleModal = (post) => {
    setPost(post);
    setModalShown((v) => !v);
  };

  return (
    <>
      {/* 모달 */}
      <BoardPage
        pagination={pagination}
        posts={posts}
        fetching={fetching}
        onPaginate={(page) => fetchData(page)}
        onClickPost={(post) => toggleModal(post)}
      />
      {modalShown && <Modal onClose={() => toggleModal()}>{post}</Modal>}
    </>
  );
}

export default Board;
