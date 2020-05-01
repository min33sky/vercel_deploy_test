import React, { useState, useCallback } from 'react';
import FooterButton from '../../components/FooterButton';

function SaveButton() {
  const [fetch, setFetch] = useState(false);

  const onClick = useCallback(() => {
    setFetch((v) => !v);
    onSave(() => setFetch((v) => !v));
  }, []);

  const onSave = (callback) => {
    setTimeout(callback, 1000);
  };

  return (
    <FooterButton onClick={onClick} disabled={fetch}>
      {fetch ? '저장중....' : '저장'}
    </FooterButton>
  );
}

export default SaveButton;
