import React, { useContext } from "react";
import { UserContext } from "./context/ThemeUserProvider";

const UseContextV1: React.FC<any> = () => {
  const useContextValue = useContext(UserContext);

  if (!useContextValue) {
    throw new Error("usecontext must be used within a UserProvider");
  }
  function changerNom(value: string) {
    useContextValue?.setUser(value);
  }
  return (
    <div>
      <button onClick={() => changerNom("Johnny")}>Changer le nom</button>{" "}
      {useContextValue?.user}
    </div>
  );
};

export default UseContextV1;
