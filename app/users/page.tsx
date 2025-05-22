import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache", // default, or "no-store" if needed
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1 className="text-2xl font-bold p-2 underline">Users</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {users.map((user) => (
          <tr>
            <td className="p-2" key={user.id}>
              {user.name}
            </td>
            <td className="p-2">{user.email}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Users;
