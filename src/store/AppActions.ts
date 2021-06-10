export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UPDATE_TITLE = 'UPDATETITLE';
export const UPDATE_TOTALCOUNT = 'UPDATETOTALCOUNT';
export const UPDATE_ALLOWED_CAPACITY = 'UPDATEALLOWEDCAPACITY';
export const UPDATE_WARNING_CAPACITY = 'UPDATEWARNINGCAPACITY';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const updateTitle = (payload) => ({ type: UPDATE_TITLE, payload });
export const updateTotalcount = (payload) => ({ type: UPDATE_TOTALCOUNT, payload });
export const updateAllowedCapacity = (payload) => ({ type: UPDATE_ALLOWED_CAPACITY, payload });
export const updateWarningCapacity = (payload) => ({ type: UPDATE_WARNING_CAPACITY, payload });
