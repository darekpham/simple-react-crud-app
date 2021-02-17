import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

const AddUserForm = (props) => {

  const initUser = { id: null, name: '', username: ''};
  const [user, setUser] = useState(initUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange(e, props.addUser(user));
  }

  return (
    <Form>
      <input type="text" placeholder="Name" name="name" onChange={handleChange}></input>
      <input type="text" placeholder="Username" name="username" onChange={handleChange}></input>
      <Button type="submit" onClick={handleSubmit}>Add</Button>
    </Form>
  )
}

export default  AddUserForm;