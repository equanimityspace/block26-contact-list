import { useEffect } from "react";
import { useState } from "react";

export default function DisplayUser({ userId, setId }) {
  const url = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${userId}`;
  // fetch data from API
  const getUser = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      await setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  // update users data
  const [user, setUser] = useState(null);

  // get api data on mount
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {user && (
        <div>
          <h1 onClick={() => setId(null)}>Contact List</h1>
          <h2>{user.name}</h2>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <ul>
            <li>{user.address.street}</li>
            <li>{user.address.suite}</li>
            <li>{user.address.city}</li>
            <li>{user.address.zipcode}</li>
            <li>
              <ul>
                <li>{user.address.geo.lat}</li>
                <li>{user.address.geo.lng}</li>
              </ul>
            </li>
          </ul>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <ul>
            <li>{user.company.name}</li>
            <li>{user.company.catchPhrase}</li>
            <li>{user.company.bs}</li>
          </ul>
        </div>
      )}
    </>
  );
}
