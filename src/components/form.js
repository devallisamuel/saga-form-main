import './App.css';
import { useState } from 'react';

import { onSubmit } from '../redux/action/action';
import { connect,useSelector } from 'react-redux';

function Form(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const formValue = useSelector(state => state.reducer);


  function handleSubmit(e) {

    e.preventDefault();
    // dispatch action that stores data in state
    let form = {
      name,
      email,
      password,
      phone
    };
    props.dispatch(onSubmit(form));
  }
  return (
    <div>
      <div className='App' >
        <div className='form'>
        <form onSubmit = {handleSubmit}>
         <div>    
            <label>Name:
            <input type="text"
              placeholder='name'
              onChange={(e) => setName(e.target.value)}
              onBlur={(e) => setName(e.target.value)}/>
            </label>
          </div>
          <div>
            <label>Email:
            <input type="text"  
            placeholder='Email' 
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => setEmail(e.target.value)}/>
            </label>
          </div>
          <div>
          <label>Password:
          <input type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          onBlur={(e) => setPassword(e.target.value)} 
          placeholder='password'/>
          </label>
          </div>

          <div>
          <label>
            Phone:
            <input type="number" 
            placeholder='number' 
            onChange={(e) => setPhone(e.target.value)}  
            onBlur={(e) => setPhone(e.target.value)}/>
          </label>
          </div>
          <button type='submit'>Submit</button>
        </form>
        </div>
      </div>
      {/* {formValue .map((form,index) => <h1 key = {index}>{form.name}</h1>)} */}
    </div>
  );
}
const mapStateToProps = function (state) {
  return {
    form: state.reducer
  }
}

export default connect(mapStateToProps) (Form);
