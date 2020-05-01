import React from 'react';
import './FooterButton.css';

function FooterButton({ children, ...props }) {
  return (
    <button className='FooterButton' {...props}>
      {children}
    </button>
  );
}

export default FooterButton;
