import { AlertColor } from '@mui/material';

export type Notification = {
    content: string;
    severity: AlertColor | undefined;
};
