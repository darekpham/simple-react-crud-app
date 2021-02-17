import React, {useState, useEffect} from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import UserTable from './userTable';
import AddUserForm from './addUserForm';
import EditUserForm  from './editUserForm';

const App = () => {
  const initUser = { id: null, name: '', username: ''};

  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initUser);

  useEffect(() => {
    loadData();
  }, []);
  
  const loadData = () => {
    fetch('https://randomuser.me/api/?results=3')
      .then(res => res.json())
      .then(data => {
        const formatted = data.results.map((obj, i) => {
          return {
            id: i,
            name: obj.name.first,
            username: `${obj.name.first} ${obj.name.last}`
          }
        });

        setUsers(formatted);
      })
      .catch(err => console.log(err));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => {
      return user.id !== id;
    }));
  }

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  }

  const updateUser = (newUser) => {
    setUsers(users.map(user => {
      return user.id === currentUser.id ? newUser : user;
    }));
  }

  return (
    <Container>
        <h1>Example CRUD app</h1>
      <Row>
        <Col>
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  currentUser={currentUser}
                  setEditing={setEditing}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser}/>
              </div>
            )
          }
        </Col>
        <Col>
          <h2>View user</h2>
          <UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
