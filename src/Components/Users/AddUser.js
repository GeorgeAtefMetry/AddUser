import React, {useState} from 'react';

import Card from '../UI/Card'; 
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

    const AddUser = (props) => {
        const [enteredUsername, setEnteredUsername] = useState('');
        const [enteredAge, setEnteredAge] = useState('');
        const [error ,setError] = useState();
    
    const addUserHandler = (event) => {
        event.preventDefault();

        if(enteredAge.trim().length === 0 || enteredUsername.trim().length === 0){
            setError({
                title:'Invalid input',
                message: 'Please enter a valid name'
            })
            return;
        }
            // "+" Force a conversion of entered age to a number by adding a PLUS
        if(+enteredAge < 0){
            setError({
                title:'Invalid Age',
                message: 'Please enter a valid Age'
            })
            return;
        }
        // Here we take name and age and store it in App.js 
        props.onAddUser(enteredUsername,enteredAge);

        setEnteredUsername('');
        setEnteredAge('');
        
    }  
        
    const usernameChangeHandler = (event) => {
        // Here we can get entered value of username with the help of (event)
        setEnteredUsername(event.target.value) 
    }; 
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value) 
        
    }; 
    const errorHandler = () => {
        setError(null);
    }
return (
    <div>
    {/*  here we check if the error is a thing */}
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}> </ErrorModal>}
    
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input 
            id='username' 
            type="text" 
            value={enteredUsername}
            onChange={usernameChangeHandler}> 
            </input>

            <label htmlFor='age'>Age (Years)</label>
            <input 
            id="age" 
            type="number"  
            value={enteredAge}
            onChange={ageChangeHandler}>
            </input>
            <Button type='submit'>Add User</Button>
        </form>
    </Card>
    </div>
)
}
export default AddUser;