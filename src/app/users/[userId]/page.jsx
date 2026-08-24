import React from 'react';

const UsersDetailPage = async({params}) => {
  const {userId} = await params;
  // console.log('user id: ', userId)
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  const user = await res.json()
  return (
    <div>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UsersDetailPage; 