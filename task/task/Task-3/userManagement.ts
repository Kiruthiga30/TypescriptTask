//union type
type UserRole = "admin" | "editor" | "viewer";
//interface for user
interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  createdDate: Date;
}
//function to create a new user
function createUser(name: string, email: string, role: UserRole): User {
  const newUser: User = {
    id: Math.floor(Math.random() * 1000) + 1,
    name,
    email,
    role,
    createdDate: new Date(),
  };
  return newUser;
}
//function to update the userrole
function updateUserInfo(user: User, newRole: UserRole): void {
  if (newRole === "admin" || newRole === "editor" || newRole === "viewer") {
    user.role = newRole;
    console.log(`User ${user.name} is updated to ${user.role}`);
  } else {
    console.error("Invalid Role");
  }
}
//function to display userinfo
function displayUserInfo(user: User): string {
  return `Displaying User Information:
    id:${user.id}
    name:${user.name}
    role:${user.role}
    createdDate:${user.createdDate}`;
}
//eg
const newUser = createUser("AAA", "aaa@gmail.com", "viewer");
console.log(displayUserInfo(newUser));
//update
updateUserInfo(newUser, "admin");
console.log(displayUserInfo(newUser));
//invalid updation
//updateUserInfo(newUser,"creater");
console.log(displayUserInfo(newUser));
