import React, { useState } from 'react';
import GameScene from './GameScene';
import levels from './levels';
import './App.css';

function App() {
  const [coins, setCoins] = useState(140);
  const element = levels[0]

  return (
    <div className="App">
      <header className="App-header">
        {console.log(element.solution)}
        <GameScene
          targets={element.targets}
          nums={element.nums}
          limit={element.limit}
          solution={element.solution}
          coins={coins}
          setCoins={setCoins}
        />
      </header>
    </div>
  );
}

export default App;
