import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Article from './components/productBox';

render(
  <Article />,
  document.getElementById('content')
);