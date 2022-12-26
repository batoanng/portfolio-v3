import React from 'react';
import { Box, Button, Container, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { MENU_LIST } from '../constant';
import NextLink from './common/next-link';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const router = useRouter();
    const isDesktopView = useMediaQuery('(min-width:375px)');
    const [menuEl, setMenuEl] = React.useState<null | HTMLElement>(null);
    const openMenu = Boolean(menuEl);

    const handleClose = () => {
        setMenuEl(null);
    };

    const handleMenuClick = (url: string) => {
        setMenuEl(null);
        router.push(url).then();
    };

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 0'
            }}
        >
            <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                {isDesktopView &&
                    MENU_LIST.map((menu, i) => (
                        <Button key={i} component={NextLink} color="graylish-violet" href={menu.url}>
                            {menu.name}
                        </Button>
                    ))}
            </Box>

            {!isDesktopView && (
                <Menu
                    id="basic-menu"
                    anchorEl={menuEl}
                    open={openMenu}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            width: '100vw',
                            height: '100vh'
                        }
                    }}
                >
                    <Button
                        sx={{ position: 'absolute', top: '16px', right: '0', color: 'black' }}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </Button>
                    <Box sx={{ marginTop: '24px' }}>
                        {MENU_LIST.map((menu, i) => (
                            <MenuItem key={i} onClick={() => handleMenuClick(menu.url)}>
                                {menu.name}
                            </MenuItem>
                        ))}
                    </Box>
                </Menu>
            )}
        </Container>
    );
};

export default Header;
