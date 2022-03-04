import { useState } from 'react';
const USER_API = 'https://randomuser.me/api/';

const Users = () => {
  const [userList, setUsers] = useState([]);
  const get = async () => {
    console.log('Fetching user form API');
    try {
      const resp = await fetch(USER_API);
      const {
        results: [user],
      } = await resp.json();

      setUsers((oldUsersList) => {
        oldUsersList.push(user);
        return [...oldUsersList];
      });
    } catch (err) {
      console.log('Error on fetch user');
    }
  };

  return { userList, getUser: get };
};

export default Users;
