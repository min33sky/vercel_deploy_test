import React from 'react';
import './Modal.css';

function Modal({ children, onClose }) {
  // 백드랍을 그릴때 스크롤 방지를 위해 body 스타일을 변경
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

export default Modal;
