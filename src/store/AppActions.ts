export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UPDATE_TITLE = 'UPDATETITLE';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const updateTitle = (payload) => ({ type: UPDATE_TITLE, payload });
