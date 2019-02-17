import axios from 'axios';

import { GET_ERRORS, SET_CURRENT_USER }  from './types';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
///Register user

export const registeruser = (userData, history) => dispatch => {
    axios.post('http://localhost:5000/api/users/register', userData)
         .then(res => history.push('/login'))
         .catch(err => dispatch({
             type:GET_ERRORS,
             payload: err.response.data
         }))
}


export const loginUser = userData => dispatch => {
    axios.post('http://localhost:5000/api/users/login',userData)
          .then(res => {
              const {token} = res.data;
              localStorage.setItem('jwt',token);
              //set token to auth header
              setAuthToken(token);
              const decoded = jwt_decode(token);
              //Set current User
              dispatch(setCurrentUser(decoded));
            
          })
          .catch(err => dispatch({
              type: GET_ERRORS,
              payload: err.response.data
          }))
}

export const setCurrentUser  = decoded => {
     return {
         type: SET_CURRENT_USER,
         payload: decoded
     }
}

//logout user

export const logoutUser = () => dispatch => {
localStorage.removeItem('jwt');
setAuthToken(false);
dispatch(setCurrentUser({}));
}