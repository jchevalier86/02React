// UseReducer.tsx
import React, { useReducer } from "react";
import IState from "../interfaces/reducer/IState";
import reducerTraitement from "../reducers/reducerTraitement";

const initialState: IState = { count: 0, civilite: [] };

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducerTraitement, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      {/* <p>
        Civilité:
        {state.civilite?.map((value: string, index) => (
          <div key={index}>{value}</div>
        ))}
      </p> */}
      <select>
        {state.civilite?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br />
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "multiplicateur" })}>
        Multiplicateur
      </button>
      <button onClick={() => dispatch({ type: "diviseur" })}>Diviseur</button>
      <button onClick={() => dispatch({ type: "civilite" })}>
        Afficher les civilités
      </button>
    </div>
  );
};

export default Counter;
