import { INCREMENT, DECREMENT } from "./AppActions";

export interface AppState {
    title: string;
    count: number;
    allowedCapacity: number;
    totalCount: number;
}

const initialState: AppState = {
    title: 'Best Buy',
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
        default:
            return state;
    }

};

