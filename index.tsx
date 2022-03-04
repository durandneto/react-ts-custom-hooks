import React, { FC } from 'react';
import { render } from 'react-dom';
import MyComponent from './MyComponent';
import './style.css';

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

render(<App />, document.getElementById('root'));
