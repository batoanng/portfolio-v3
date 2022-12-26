import { OpenNotificationAction, CloseNotificationAction } from '../actions';
import { ActionType } from '../action-types';
import { Notification } from '../types/notification';

export const openNotification = (payload: Notification): OpenNotificationAction => {
    return {
        type: ActionType.OPEN_NOTIFICATION,
        payload
    };
};

export const closeNotification = (): CloseNotificationAction => {
    return {
        type: ActionType.CLOSE_NOTIFICATION
    };
};
