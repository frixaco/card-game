import React from 'react';
import ReactDOM from 'react-dom';
import { CardGame } from './CardGame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
