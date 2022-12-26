import produce from 'immer';
import { Action } from '../actions';
import { ActionType } from '../action-types';
import { Notification } from '../types/notification';

const initialState: Notification = {
    content: '',
    severity: undefined
};

const reducer = produce((state: Notification = initialState, action: Action): Notification => {
    switch (action.type) {
        case ActionType.OPEN_NOTIFICATION:
            state.content = action.payload.content;
            state.severity = action.payload.severity;
            return state;
        case ActionType.CLOSE_NOTIFICATION:
            state.content = '';
            state.severity = undefined;
            return state;
        default:
            return state;
    }
}, initialState);

export default reducer;
