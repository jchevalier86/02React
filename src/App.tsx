import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
//import {formadate, formatmail};
//L'appel à partir de app.tsx
import Greetings from './components/Greetings';
import GreetingProps from './interfaces/GreetingProps';
import TestPassFunction from './components/TestPassFunction';
import NameList from './components/NameList';
import NameListProps from './interfaces/NameListProps';
import Task from './interfaces/Task';

function App() {
  let greetObject:GreetingProps={"name":"Johnny"};
  let testAlertParent=(value:string)=> alert(value);
  let taskList:Task[]=[];
  const taskOne={title:"Learn React", description:"so good"};
  taskList.push(
    taskOne
  );
  taskList.push(
    {title:"Learn Mongo DB", description:"wow"}
  );
  let listTask: NameListProps= { tasks: taskList };
  return (
    <div className="App">
      <header className="App-header">
        <Greetings {...greetObject} />
        <TestPassFunction testAlert={(value:string)=>testAlertParent(value)}/>
          <NameList {...listTask}/> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;