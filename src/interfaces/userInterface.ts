import Recept from "./receptInterface";
export interface User {
  id: number;
  email: string;
  password: string;
  loggedIn: boolean;
  favoritRecipe: Recept[];
}

export const mockUser: User[] = [
  {
    id: 1,
    email: "test1@mail.se",
    password: "test1",
    loggedIn: false,
    favoritRecipe: [],
  },
  {
    id: 2,
    email: "test2@mail.se",
    password: "test2",
    loggedIn: false,
    favoritRecipe: [],
  },
  {
    id: 3,
    email: "test3@mail.se",
    password: "test3",
    loggedIn: false,
    favoritRecipe: [],
  },
];
