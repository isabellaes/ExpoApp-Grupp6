import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../interfaces/userInterface";

interface ContextValue {
  setLoggedInUser: (user: User) => void;
  getLoggedInUser: () => void;
}

const UserContext = createContext<ContextValue>({
  setLoggedInUser: () => {
    console.warn("UserProvider not found");
  },
  getLoggedInUser: () => {
    console.warn("UserProvider not found");
  },
});

interface Props {
  children: ReactNode;
}

function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  const setLoggedInUser = (loggedInUser: User) => {
    setUser(loggedInUser);
  };

  const getLoggedInUser = () => {
    user;
  };
  return (
    <UserContext.Provider
      value={{
        setLoggedInUser,
        getLoggedInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
