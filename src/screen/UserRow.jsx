import React from "react";

const UserRow = ({ index, profile }) => {


  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{profile._id}</td>
        <td>{profile.name}</td>
        <td>{profile.email}</td>
        <td>{new Date(profile.createdAt).toLocaleDateString('en-IN')}</td>
        {/* <td>{profile.email}</td> */}
       
      </tr>
    </>
  );
};

export default UserRow;
