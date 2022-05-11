import React from 'react';
import './StepRow.css';

const StepRow = () => {
  return (
    <div className='step-row'>
      <div className='step-lang-box'>
        <div className='step-lang-box-top'>
          <button className='step-lang-button'>x</button>
          <button className='step-lang-button'>r</button>
        </div>
          <p className='step-lang-label'>XY</p>
      </div>
      <div className='step-lang-text'>
        placeholder translated text
      </div>
    </div>
  );
};

export { StepRow };
