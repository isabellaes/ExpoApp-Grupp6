export interface User {
  id: number;
  email: string;
  password: string;
}

export const mockUser: User[] = [
  {
    id: 1,
    email: "test1@mail.se",
    password: "test1",
  },
  {
    id: 2,
    email: "test2@mail.se",
    password: "test2",
  },
  {
    id: 3,
    email: "test3@mail.se",
    password: "test3",
  },
];
