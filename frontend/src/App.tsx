import React from 'react';
import CardGame from './components/CardGame';
import { DeckProvider } from './context';

const App: React.FC = () => {
  return (
    <DeckProvider>
      <CardGame />
    </DeckProvider>
  );
};

export default App;
