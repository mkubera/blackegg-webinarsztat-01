import { User, Users } from "./types";

// Helper functions / Utils (Utilities)
const genId = (): number => Math.floor(Math.random() * 10) + 1;

// CRUD functions - USER
const initUser = (id: any, name: any, age: any): any => ({
  id,
  name,
  age,
});
const getUserName = ({ name }: { name: any }): string => name;
const setUserName = (user: any, newName: any): any => ({
  ...user,
  name: newName,
});
const removeUserAge = (user: any): any => ({ ...user, age: null });

const userGabriel: any = initUser(genId(), "Gabriel", 33);
console.log(userGabriel);
console.log(getUserName(userGabriel));
console.log(setUserName(userGabriel, "Michael"));
console.log(removeUserAge(userGabriel));



// CRUD functions - USERS
const initUsers = (...users: any): any => users;
const addUser = (users: any, newUser: any): any => [...users, newUser];
const setUserNameById = (users: any, id: any, newName: any): any =>
  users.map((user) => (user.id !== id ? { ...user, name: newName } : user));
const removeUserById = (users: any, id: any): any =>
  users.filter((user) => user.id !== id);

const userZeruel: any = initUser(genId(), "Zeruel", 22);
const userRamiel: any = initUser(genId(), "Ramiel", 11);
const users: any = initUsers(userGabriel, userZeruel);
console.log(users);
console.log(addUser(users, userGabriel));
console.log(setUserNameById(users, users[0].id, "Thomas"));
console.log(removeUserById(users, users[0].id));
