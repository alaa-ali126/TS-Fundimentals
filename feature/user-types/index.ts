interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

const filterAdmins = (users: User[]): User[] => {
  const filteredAdmins = users.filter((user) => user.isAdmin);
  console.log(filteredAdmins);

  return filteredAdmins;
};
const users: User[] = [
  { id: 1, name: "daniel", email: "", isAdmin: true },
  { id: 2, name: "daniel", email: "", isAdmin: true },
  { id: 3, name: "daniel", email: "", isAdmin: false },
  { id: 4, name: "daniel", email: "", isAdmin: false },
  { id: 5, name: "daniel", email: "", isAdmin: true },
];
filterAdmins(users);
