import React from 'react';
import axios from 'axios';
import '../profile-view/profile-view.scss';

export function UpdateUser ({ props }) {
  const { user } = props;
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday ] = useState('');
  const [ values, setValues ] = useState({
    nameErr: '',
    usernameErr: '',
    passwordErr: '',
    emailErr: '',
  });

  //validate user inputs
  const validate = () =>  {
    let isReq = true;
    if(!username){
      setValues({...values, usernameErr: 'Username Required'});
      isReq = false;
    }else if(username.length < 5){
      setValues({...values, usernameErr: 'Username must be 5 characters long'});
      isReq = false;
    }
    if(!password){
      setValues({...values, passwordErr: 'Password Required'});
      isReq = false;
    }else if(password.length < 6){
      setValues({...values, passwordErr: 'Password must be 6 characters long'});
      isReq = false;
    }
    if(!email){
      setValues({...values, emailErr: 'Email Required'});
      isReq = false;
    }else if(email.indexOf('@') === -1){
      setValues({...values, emailErr: 'Email is invalid'});
      isReq = false;
    }
    return isReq;
  }
  
  
  return (
<form className='profile-form' onSubmit={(e) => handleUserUpdate(e)}>
  <h2>Want to change your info?</h2>
  <label>Username:</label>
  <input type='text' name='Username' defaultValue={user.Username} onChange={e => setUsername(e.target.value)} />
  
  <label>Password:</label>
  <input type='password' name='passsword' defaultValue={user.Password} onChange={e => setPassword(e.target.value)} />

  <label>Email address:</label>
  <input type='email' name='email' defaultValue={user.Email} onChange={e => setEmail(e.target.value)} />

  <label>Birthday:</label>
  <input type='birthday' name='birthday' defaultValue={user.Birthday} onChange={e => setBirthday(e.target.value)} />

  <button variant='primary' type='submit'>Update</button>
</form>
  )
}

