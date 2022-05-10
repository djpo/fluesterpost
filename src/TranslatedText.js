import React from 'react';

const TranslatedText = ({ isTranslating, text }) => {
  return isTranslating
    ? <p>I am translating...</p>
    : <p>{text || 'I am NOT translating'}</p>;
};

export { TranslatedText };
