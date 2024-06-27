import React, { createContext, useState, ReactNode } from "react";

// objet user de type useState qu'on partage
interface IUserContextProps {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

// le user context qui permet de récupérer les données dans les composants enfants
export const UserContext = createContext<IUserContextProps | undefined>(
  undefined
);

export const ThemeUserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // initialise le useState
  const [user, setUser] = useState("bob");

  //créé Provider à partir du UserContext
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
