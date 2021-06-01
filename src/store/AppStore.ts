import { INCREMENT, DECREMENT, UPDATE_TITLE, UPDATE_TOTALCOUNT, UPDATE_ALLOWED_CAPACITY } from "./AppActions";

export interface AppState {
    title: string;
    count: number;
    allowedCapacity: number;
    totalCount: number;
}

const initialState: AppState = {
    title: 'Counter',
    count: 10,
    allowedCapacity: .75,
    totalCount: 28
}

export const appReducer = (state: AppState = initialState, action) => {

    switch (action.type) {
        case INCREMENT:
            return { ...state, count: ++state.count };
        case DECREMENT:
            return { ...state, count: Math.max(0, --state.count) };
        case UPDATE_TITLE:
            return { ...state, title: action.payload };
        case UPDATE_TOTALCOUNT:
            return { ...state, totalCount: action.payload };
        case UPDATE_ALLOWED_CAPACITY:
            return { ...state, allowedCapacity: action.payload };
        default:
            return state;
    }

};

