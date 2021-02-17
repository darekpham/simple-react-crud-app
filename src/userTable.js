import React from 'react';
import { Table, Button } from 'react-bootstrap';

const UserTable = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {
          props.users.length > 0 ? (
            props.users.map((user, index) => {
              const {id, name, username} = user;
              return (
                <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>
                  <Button onClick={() => props.editUser(id, user)}>Edit</Button>
                  <Button onClick={() => props.deleteUser(id)}>Delete</Button>
                </td>
              </tr>
              )
            })
          ) : (
            <tr>
              <td>No user found</td>
            </tr>
          )
        }
      </tbody>
    </Table>
  )
}

export default UserTable;