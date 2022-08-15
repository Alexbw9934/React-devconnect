import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuidv4 } from 'uuid';
//i should able to dispatch more than one action types from this function
//so we have something called dispatch
//in the following we used 2 arrow function, we can do that because of that thunk middleware
export const setAlert = (msg, alertType,timeout=5000) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
