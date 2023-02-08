import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './UsersList.module.css'

const UsersList = (props) => {
    return (
        <Card className={classes.users}>  
            <ul>
                {props.users.map((user) => 
                <li key={user.id}>
                        {user.name}  ({user.age} Years Old)
                </li>
                    )}
            </ul>
        </Card>
    )
}

export default UsersList;