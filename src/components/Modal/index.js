import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

/**
 * 모달 컴포넌트
 * @param {string} children 모달 내용
 * @param {Function} onClose 모달 닫는 함수
 */
function Modal({ children, onClose }) {
  /*
    ? 백드랍을 그릴때 스크롤바 방지를 위해 body style을 변경
    ? 모달을 끌 땐 원상태로 복구시킨다
   */
  React.useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => (document.body.style.overflowY = 'auto');
  }, []);

  return (
    <>
      <div className='Modal-backdrop' onClick={onClose}></div>
      <div className='Modal'>
        <div className='Modal-body'>{children}</div>
        <div className='Modal-footer'>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
