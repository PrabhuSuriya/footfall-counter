import { INCREMENT, DECREMENT, UPDATE_TITLE, UPDATE_TOTALCOUNT, UPDATE_ALLOWED_CAPACITY, UPDATE_WARNING_CAPACITY } from "./AppActions";

const localStorageKey = 'FOOTFALL_DATA_V1';
export interface AppState {
    title: string;
    count: number;
    allowedCapacity: number;
    warningCapacity: number;
    totalCount: number;
}

const defaultState: AppState = {
    title: 'FootFall Counter',
    count: 0,
    allowedCapacity: .75,
    warningCapacity: .65,
    totalCount: 100
}

let initialState = defaultState;
const footfall_data = localStorage.getItem(localStorageKey);
if (footfall_data) {
    try {
        initialState = JSON.parse(footfall_data);
        initialState = Object.assign(defaultState, initialState);
    }
    catch (e) {
        console.error('Error parsing json from local storage');
    }
}



const updateLocalStorage = (appState: AppState) => {
    const footfall_data = JSON.stringify(appState)
    localStorage.setItem(localStorageKey, footfall_data);
}


export const appReducer = (state: AppState = initialState, action) => {
    let newState: AppState;
    switch (action.type) {
        case INCREMENT:
            newState = { ...state, count: ++state.count };            
            break;
        case DECREMENT:
            newState = { ...state, count: Math.max(0, --state.count) };
            break;
        case UPDATE_TITLE:
            newState = { ...state, title: action.payload };
            break;
        case UPDATE_TOTALCOUNT:
            newState = { ...state, totalCount: action.payload };
            break;
        case UPDATE_ALLOWED_CAPACITY:
            newState = { ...state, allowedCapacity: action.payload };
            break;
        case UPDATE_WARNING_CAPACITY:
            newState = { ...state, warningCapacity: action.payload };
            break;
        default:
            newState = state;
            break;
    }
    updateLocalStorage(newState);
    return newState;
};

