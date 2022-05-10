import React from 'react';

const TranslatedText = ({ isTranslating, text }) => {
  return isTranslating
    ? <p>(translating...)</p>
    : <p>{text || ''}</p>;
};

export { TranslatedText };
