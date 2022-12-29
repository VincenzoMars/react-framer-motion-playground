import * as React from 'react';
import List from './components/List/List';
import Square from './components/Square/Square';
import './style.css';

export default function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div>
      <h1>Framer Motion!</h1>
      <button onClick={() => setIsVisible(!isVisible)}>Click Me!</button>
      <div className="flex-container">
        <Square isVisible={isVisible} isDisabled />
        <List isVisible={isVisible} />
      </div>
    </div>
  );
}
