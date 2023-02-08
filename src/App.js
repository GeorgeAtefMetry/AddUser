import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import classes from '../src/Components/Users/UsersList.module.css'
import Card from './Components/UI/Card';
import Button from './Components/UI/Button';
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler =(uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id:Math.random().toString() }];
    })
  }
  const DeleteUser = (id) => {
    const newUsers = usersList.filter((user) => user.id !== id)
    setUsersList(newUsers)
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <Card className={classes.users}>  
            <ul>
                {usersList.map((user) => 
                <li key={user.id}>
                        {user.name}  ({user.age} Years Old)
                        <div style={{float:'right', lineHeight:'0x'}}>
                        <Button onClick={() => DeleteUser(user.id)}>Delete User</Button>
                        </div>
                </li>
                    )}
            </ul>
        </Card>
    </div>
  );
}

export default App;
