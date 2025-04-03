import { useEffect } from "react";
import { useState } from "react";

const url = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

export default function FetchUsers({ setId }) {
  // fetch data from API
  const getApi = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      await setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  // update data
  const [users, setUsers] = useState(null);

  // get data on mount only
  useEffect(() => {
    getApi();
  }, []);

  // display data
  return (
    <>
      <h2 class="contactList">Contact List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr
                  id={user.id}
                  onClick={() => {
                    setId(user.id);
                  }}
                >
                  <td id={user.name}>{user.name}</td>
                  <td id={user.email}>{user.email}</td>
                  <td id={user.phone}>{user.phone}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
