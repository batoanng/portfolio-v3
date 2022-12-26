import React from 'react';
import { Alert, Box, Snackbar } from '@mui/material';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import Header from './header';
import Footer from './footer';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    const { closeNotification } = useActions();
    const { content, severity } = useTypedSelector(({ notification }) => notification);

    const onCloseNotification = () => {
        closeNotification();
    };

    return (
        <Box sx={{ display: 'flex', flexFlow: 'column', minHeight: '100vh' }}>
            <Header />
            <Box sx={{ flexGrow: 1 }}>{children}</Box>
            <Footer />
            <Snackbar
                open={content !== ''}
                autoHideDuration={3000}
                onClose={onCloseNotification}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                message=""
                sx={{
                    minWidth: '60vw',
                    '>div': { flexGrow: 1 }
                }}
            >
                <Alert severity={severity} onClose={onCloseNotification} sx={{ width: '100%' }}>
                    {content}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Layout;
