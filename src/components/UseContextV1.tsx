import React, { useContext } from "react";
import { UserContext } from "./context/ThemeUserProvider";

const UseContextV1: React.FC<any> = () => {
  const useContextValue = useContext(UserContext);
  // je récupère les données de UseContext

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
      {useContextValue.civilite?.map((value: string, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
};

export default UseContextV1;
