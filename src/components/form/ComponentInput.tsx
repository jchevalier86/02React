import React, { useContext } from "react";
import { UserContext } from "../context/ThemeUserProvider";

type Props<T> = {
  type: string;
  value: T;
  placeholder: string;
  onChangeInput: (value: T) => void;
};

const ComponentInput: React.FC<Props<any>> = ({
  type,
  value,
  placeholder,
  onChangeInput,
}) => {
  function modifierLaValeurInput(e: any) {
    if (value === "number") {
      onChangeInput(parseFloat(e.target.value));
    } else {
      onChangeInput(e.target.value);
    }
  }

  //récupérer avec le hook useContext le contenu de UserContext
  //qui est de type IUserContextProps
  const useContextValue = useContext(UserContext);
  if (!useContextValue) {
    throw new Error("useContext must be used within a UserProvider");
  }

  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={(e) => {
          modifierLaValeurInput(e);
        }}
        placeholder={placeholder}
      ></input>
      {useContextValue?.user}
    </div>
  );
};

export default ComponentInput;
