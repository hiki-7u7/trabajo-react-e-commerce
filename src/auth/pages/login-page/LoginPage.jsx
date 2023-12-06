import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import {AuthContext} from '../../context'
import { LoginForm } from '../../../common/components';

import styles from './login-page.module.css';


export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = async(values) => {
    
    const trimmedValues = Object.keys(values).reduce((acc, key) => {
      acc[key] = typeof values[key] === 'string' ? values[key].trim() : values[key];
      return acc;
    }, {});
    const loged = await login(trimmedValues);
    if(loged){
      navigate('/');
    }
  }

  return (
    <div className={styles.container}>
        <LoginForm onSubmit={handleSubmit}/>
    </div>
  )
}
