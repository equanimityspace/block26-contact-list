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
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <ul>
            <li>Street: {user.address.street}</li>
            <li>Suit: {user.address.suite}</li>
            <li>City: {user.address.city}</li>
            <li>Zip: {user.address.zipcode}</li>
            <li>
              <br></br>
              <ul>
                <li>Latitude: {user.address.geo.lat}</li>
                <li>Longitude: {user.address.geo.lng}</li>
              </ul>
            </li>
          </ul>
          <p>Phone #: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Company Name: {user.company.name}</p>
          <ul>
            <li>Slogan: {user.company.catchPhrase}</li>
            <li>Tags: {user.company.bs}</li>
          </ul>
        </div>
      )}
    </>
  );
}
