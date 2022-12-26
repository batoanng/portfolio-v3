import { ActionType } from '../action-types';
import { Notification } from '../types/notification';

export interface OpenNotificationAction {
    type: ActionType.OPEN_NOTIFICATION;
    payload: Notification;
}

export interface CloseNotificationAction {
    type: ActionType.CLOSE_NOTIFICATION;
}

export type Action = OpenNotificationAction | CloseNotificationAction;
