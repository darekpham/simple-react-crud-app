import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';

const EditUserForm = (props) => {

  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser)
  }, [props]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.username) {
      props.updateUser(user)
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    props.setEditing(false);
  };

  return (
    <Form>
      <input type="text" placeholder="Name" name="name" value={user.name} onChange={handleChange}></input>
      <input type="text" placeholder="Username" name="username" value={user.username} onChange={handleChange}></input>
      <Button type="submit" onClick={handleSubmit}>Save</Button>
      <Button type="submit" onClick={handleCancel}>Cancel</Button>
    </Form>
  )
}

export default  EditUserForm;