import { createContext, ReactNode, useContext, useState } from "react";
import { mockUser, User } from "../interfaces/userInterface";

interface ContextValue {
  setLoggedInUser: (user: User) => void;
  getLoggedInUser: () => void;
  validateUser: (values: Values) => boolean;
}
interface Values {
  email: string;
  password: string;
}

const UserContext = createContext<ContextValue>({
  setLoggedInUser: () => {
    console.warn("UserProvider not found");
  },
  getLoggedInUser: () => {
    console.warn("UserProvider not found");
  },
  validateUser: () => {
    return false;
  },
});

interface Props {
  children: ReactNode;
}

function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);
  function changeUser(user: User) {
    //setUser(user);
    setUser(user);
  }
  function validateUser(values: Values) {
    const user = mockUser.find(
      (user) => user.email == values.email && user.password == values.password
    );
    if (user) {
      changeUser(user);
      return true;
    } else return false;
  }
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
        validateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
