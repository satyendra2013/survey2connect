import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';
import axios from 'axios';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
    case 'clear_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'loading':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    console.log(email, password);
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email) === false) {
      dispatch({
        type: 'add_error',
        payload: 'Please enter a valid email',
      });
    } else if (regex.test(email) === true && password.length < 6) {
      dispatch({
        type: 'add_error',
        payload: 'The username or password is incorrect',
      });
    } else if (regex.test(email) === true && password.length > 6) {
      dispatch({ type: 'loading', payload: true });
      const response = await axios.post(
        'https://survey2connect.com/v1/signin',
        {
          userId: email,
          password,
        }
      );
      console.log(response.status);
      dispatch({ type: 'signin', payload: response.data });
      navigate('mainFlow');
    }
    setTimeout(() => {
      dispatch({
        type: 'clear_error',
        payload: '',
      });
    }, 2000);
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'The username or password is incorrect',
    });
    setTimeout(() => {
      dispatch({
        type: 'clear_error',
        payload: '',
      });
    }, 2000);
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin },
  { errorMessage: '' }
);
