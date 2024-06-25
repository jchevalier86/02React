import React, { useState } from "react";
// import logo from "./logo.svg";
import "./styles/App.css";
// import {formatDate, formatMail} from './utils/formatStrings';
//L'appel à partir de app.tsx
import Greetings from "./components/Greetings";
import GreetingProps from "./interfaces/GreetingProps";
import TestPassFunction from "./components/TestPassFunction";
import NameList from "./components/NameList";
import NameListProps from "./interfaces/NameListProps";
import Task from "./interfaces/Task";
import Counter from "./components/Counter";
import Post from "./components/Post";
import ChatRoom from "./components/ChatRoom";

function App() {
  let greetObject: GreetingProps = { name: "Johnny" };
  let testAlertParent = (value: string) => alert(value);

  // créer une liste de Task
  let taskList: Task[] = [];

  const taskOne = { title: "Learn React", description: "so good" };
  taskList.push(taskOne);
  taskList.push({ title: "Learn Mongo DB", description: "wow" });
  let listTask: NameListProps = { tasks: taskList };

  const [idPostState, setIdPostState] = useState("1");
  const handleChange = (value: string) => {
    setIdPostState(value);
  };
  const [roomId, setRoomId] = useState("general");

  return (
    <div className="App">
      <header className="App-header">
        <Greetings {...greetObject} />
        <TestPassFunction
          testAlert={(value: string) => testAlertParent(value)}
        />
        <NameList {...listTask} />
        <Counter />
        <input
          type="number"
          value={idPostState}
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        <Post postid={idPostState} />
        <label>
          Choose the chat room:{" "}
          <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
            <option value="general">general</option>
            <option value="travel">travel</option>
            <option value="music">music</option>
          </select>
        </label>

        <ChatRoom roomId={roomId} />

        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
