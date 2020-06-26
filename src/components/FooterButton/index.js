import React from 'react';
import './FooterButton.css';

/**
 * 하단에 위치하는 버튼 컴포넌트
 * @param {string} children 버튼 내용
 * @param {Array<React.Props>} props props들
 *
 */
function FooterButton({ children, ...props }) {
  return (
    <button className='FooterButton' {...props}>
      {children}
    </button>
  );
}

export default FooterButton;
