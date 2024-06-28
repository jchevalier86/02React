import IState from "../interfaces/reducer/IState";
import IAction from "../interfaces/reducer/IAction";

export default function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count! + 1 };
    case "decrement":
      return { ...state, count: state.count! - 1 };
    case "multiplicateur":
      return { ...state, count: state.count! * 10 };
    case "diviseur":
      return { ...state, count: state.count! / 2 };
    case "civilite":
      return { ...state, civilite: ["M", "MME", "Autre"] };
    default:
      throw new Error();
  }
}
