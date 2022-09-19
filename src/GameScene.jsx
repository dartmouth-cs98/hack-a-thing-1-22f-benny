import React, { useState, useEffect } from 'react';
import './GameScene.css';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";



const Game1 = ({
  keyRef, targets, nums, limit, solution
}) => {
  const [count, setCount] = useState(targets[0]);
  const [doneTarget, setDone] = useState(1);
  const [operationCount, setOCount] = useState(0);
  const [hintNum, setHints] = useState(0);
  
  let [operations] = useState([]);
  let [countHistory] = useState([targets[0]])
  let [targetHistory] = useState([0]);

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  // Code sourced from https://w3collective.com/react-stopwatch/
  useEffect(() => {
    let interval;
    if(keyRef) setRunning(true)
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);


  const firebaseConfig = {
    databaseURL: "https://operators-a44ee-default-rtdb.firebaseio.com",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);

  
  const writeToDataBase = (currTime, hints, solution) => {
    set(ref(database, keyRef), {
      time: currTime,
      hints: hints,
      solution: solution
    });
  }
  

  const levelCompelted = () => {
    writeToDataBase(time, hintNum,operations)
    setRunning(false)
  }



  const pressOperation = (num) => {
    if (operationCount <= limit - 1) {

      const newCount = performOperation(num);
      if (newCount || newCount === 0) {
        countHistory.push(newCount);

        targets.forEach((target, idx) => {
          if (doneTarget === idx && target === newCount) {
            setDone(doneTarget + 1);
            targetHistory.push(1);
            if (doneTarget === 3) {
              
            }
          }
        });
  
        if (targetHistory.length < countHistory.length)
          targetHistory.push(0)
        operations.push(num);
        setOCount(operationCount + 1);
        setCount(newCount);
      }
    } else {
      console.log('warning!');
    }
  };

  const performOperation = (operation) => {
    const value = count;
    // console.log(value)
    if (operation.includes("sqrt") && value > 0 && Math.sqrt(value) % 1 === 0) {
      return Math.sqrt(value)
    }
    else if (!operation.includes("sqrt")) {
      const operand = operation.charAt(0)
      const number = parseInt(operation.substr(1,operation.length))
      if (operand === "/" && value % number === 0 && value !== 0){
        return value / number;
      }
      else if (operand === "+") {
        return value + number
      }
      else if (operand === "-") {
        return value - number
      }
      else if (operand === "*") {
        return value * number
      }
    }
  }

  const undoButton = () => {

    if (operationCount > 0) {
      let prev_operation = operations.pop();
      const newCount = performUndo(prev_operation);
      // eslint-disable-next-line react/prop-types
      targets.forEach((target, idx) => {
        if (doneTarget === idx+1 && target === count && targetHistory[operations.length+1] === 1) {
          setDone(doneTarget - 1);
        }
      });
      targetHistory.pop();
      countHistory.pop();
      setOCount(operationCount - 1);
      setCount(newCount);
    } else {
      console.log('Can not undo!');
    }
  };

  const performUndo = (operation) => {
    const value = count;
    if (operation.includes("sqrt") && value > 0 && Math.sqrt(value) % 1 === 0) {
      return Math.sqrt(value)
    }
    else if (!operation.includes("sqrt")) {
      const operand = operation.charAt(0)
      const number = parseInt(operation.substr(1,operation.length))
      if (operand === "/"){
        return value * number;
      }
      else if (operand === "+") {
        return value - number
      }
      else if (operand === "-") {
        return value + number
      }
      else if (operand === "*") {
        return value / number
      }
      else {
        return false;
      }
    }
  }

  const reset = () => {
    setCount(targets[0]);
    setDone(1);
    setOCount(0);
    for (let i = countHistory.length; i > 1; i--) {
      countHistory.pop();
      targetHistory.pop();
      operations.pop();
    }
  }

  const getHint = () => {

    if (solution.length > hintNum)
    {
      setHints(hintNum + 1);
    }
  }
  return (

    <div className="gameScene">
      <div className='history'>
        <h1>Time: {time.toString().slice(0, -3)}</h1>
        <h2>History</h2>
        <div className='countHistory'>
          {countHistory.map((elm, idx) => (
            <div>
              <p className= "count-operation" >{operations[idx-1]}</p>
              <p className={targetHistory[idx] === 1  || idx === 0 ? "count-num-target" : 'count-num'}>{elm}</p>
            </div>
          ))}
        </div>

        <div className='solutions'>

          {solution.map((elm, idx) => (
              <p className="solution">{hintNum > idx ? elm : null}</p>
          ))}
        </div>
      </div>

      <div>
        <h1>{count}</h1>
        <h3>
          Limit:
          {' '}
          {operationCount}
          /
          {limit}
        </h3>
        <div className="targets">
          {targets.map((target, idx) => (
            <h2 className={doneTarget > idx ? 'done' : ''}>
              {`${idx === 0 ? '' : ' -> '}${target}`}
            </h2>
          ))}
        </div>

        {/* {  ? <h2>GOOD JOB!</h2> : null} */}
        <div className="operations">
          {nums.map((num) => (
            <button className="operation" type="button" onClick={() => pressOperation(num)}>{num}</button>
          ))}
        </div>

        <div className="operations">
          <button type="button" onClick={() => undoButton()}>undo</button>
          <button type="button" onClick={() => reset()}>reset</button>
          <button type="button" onClick={() => getHint()}>hint</button>
        </div>
      </div>
    </div>
  );
};
export default Game1;
