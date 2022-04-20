import ReactDOM from 'react-dom';
import './styles/index.css';
import CardGame from 'CardGame';
import { DeckProvider } from './context';

ReactDOM.render(
  <DeckProvider>
    <CardGame />
  </DeckProvider>,
  document.getElementById('root')
);
