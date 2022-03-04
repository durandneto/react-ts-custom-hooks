import React from 'react';
import useArrayHook from './useArrayHook';
import useUser from './useUser';

export default function ArrayComponent() {
  const { array, currentValue, nextValue, push } = useArrayHook([]);

  const { userList, getUser } = useUser();

  console.log('render ArrayComponent');
  return (
    <div>
      Welcome to useArrayHook
      <div>items {array.join('')}</div>
      <div>Current Value {currentValue}</div>
      <button onClick={() => push(1)}>Add 1</button>
      <button onClick={() => nextValue()}>Next</button>
      <hr />
      <div>
        {userList.map((user, idx) => (
          <div key={idx}>
            {user.name.first} - {user.name.last}
          </div>
        ))}
      </div>
      <button onClick={() => getUser()}>Next User</button>
    </div>
  );
}
