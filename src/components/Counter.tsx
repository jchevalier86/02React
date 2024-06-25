// Counter.tsx
import React, { useEffect, useState } from "react";
import Task from "../interfaces/Task";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  // exemple avec tack et modification des valeurs de l'objet
  const task: Task = { title: "learn react", description: "top" };
  const [taskState, setTaskState] = useState(task);
  const handleChange = (attribut: string, value: string) => {
    setTaskState({ ...taskState, [attribut]: value });
  };

  //   useEffect(() => {
  //     console.log("Counter component rendered");
  //   });
  useEffect(() => {
    console.log("Count value changed");
  }, [count]);
  // exmple qui ne marche pas car pas de useState()
  //   let count = 1;
  //   function plusOne() {
  //     count = count + 1;
  //   }
  //   return (
  //     <div>
  //       <p>Count: {count}</p>
  //       <button onClick={() => plusOne()}>Increment</button>
  //     </div>
  //   );

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <div>
        <input
          type="text"
          value={taskState.title}
          onChange={(e) => handleChange("title", e.target.value)}
        ></input>
        <br />
        <br />
        <textarea
          rows={5}
          cols={30}
          value={taskState.description}
          onChange={(e) => handleChange("description", e.target.value)}
        ></textarea>
      </div>
    </>
  );
};

export default Counter;
