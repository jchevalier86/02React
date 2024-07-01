import React /*{ useState }*/ from "react";
// import logo from "./logo.svg";
import "./styles/App.css";
// import {formatDate, formatMail} from './utils/formatStrings';
// L'appel à partir de app.tsx
// import Greetings from "./components/Greetings";
// import GreetingProps from "./interfaces/GreetingProps";
// import TestPassFunction from "./components/TestPassFunction";
// import NameList from "./components/NameList";
// import NameListProps from "./interfaces/NameListProps";
// import Task from "./interfaces/Task";
// import Counter from "./components/Counter";
// import Post from "./components/Post";
// import ChatRoom from "./components/ChatRoom";
// import CalculTva from "./components/CalculTva";
// import UseRefv1 from "./components/UseRefv1";
// import UseRefv2 from "./components/UseRefv2";
// import UseRefv3 from "./components/UseRefv3";
// import UseRefv4 from "./components/UseRefv4";
// import PreviousValue from "./components/PreviousValue";
import UseContextV1 from "./components/UseContextV1";
import UseReducerV1 from "./components/UseReducerV1";
import UseMemoV1 from "./components/UseMemoV1";

function App() {
  // let greetObject: GreetingProps = { name: "Johnny" };
  // let testAlertParent = (value: string) => alert(value);

  // créer une liste de Task
  // let taskList: Task[] = [];

  // const taskOne = { title: "Learn React", description: "so good" };
  // taskList.push(taskOne);
  // taskList.push({ title: "Learn Mongo DB", description: "wow" });
  // let listTask: NameListProps = { tasks: taskList };

  // const [idPostState, setIdPostState] = useState("1");
  // const handleChange = (value: string) => {
  //   setIdPostState(value);
  // };
  // const [roomId, setRoomId] = useState("general");

  return (
    <div className="App">
      <header className="App-header">
        {/* <Greetings {...greetObject} />
        <TestPassFunction
          testAlert={(value: string) => testAlertParent(value)}
        />
        <NameList {...listTask} />
        <Counter />
        <input
          type="number"
          value={idPostState}
          onChange={(e) => handleChange(e.target.value)}
        ></input> */}
        {/* <Post postid={idPostState} /> */}
        {/* <label>
          Choose the chat room:{" "}
          <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
            <option value="general">general</option>
            <option value="travel">travel</option>
            <option value="music">music</option>
          </select>
        </label> */}

        {/* <ChatRoom roomId={roomId} /> */}
        {/* <CalculTva /> */}
        {/* <UseRefv1 />
        <UseRefv2 />
        <UseRefv3 /> */}
        {/* <UseRefv4 /> */}
        {/* <PreviousValue /> */}
        <UseContextV1 />
        <UseReducerV1 />
        <UseMemoV1 />
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
