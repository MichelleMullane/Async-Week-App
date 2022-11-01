import React from 'react';
import { ItemAForm, ItemBForm } from '../forms';

const Pear = () => {
  return (
    <div>
      <h1>Make your comPEARison 🍐</h1>
      <h2>Enter Details for Item A Below:</h2>
      <ItemAForm />
      <h2>Enter Details for Item B Below:</h2>
      <ItemBForm />
    </div>
  );
};

export default Pear;
