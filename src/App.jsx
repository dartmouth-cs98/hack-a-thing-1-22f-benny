import React, { useState } from 'react';
import GameScene from './GameScene';
import levels from './levels';
import './App.css';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";




function App() {
  const [coins, setCoins] = useState(140);
  const element = levels[0]
  const num = localStorage.getItem('num') || Math.floor(Math.random()*999999);
  localStorage.setItem('num',num);
  // TODO: Replace the following with your app's Firebase project configuration
  // See: https://firebase.google.com/docs/web/learn-more#config-object
  const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://operators-a44ee-default-rtdb.firebaseio.com",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);

  console.log(database)
  

  return (
    <div className="App">
      <header className="App-header">
        <GameScene
          key={num}
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
