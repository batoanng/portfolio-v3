import React from 'react';
import { Box, Button, Container, styled, useMediaQuery, useTheme } from '@mui/material';
import { MENU_LIST } from '../constant';
import NextLink from './common/next-link';
import Image from 'next/image';

const SOCIAL_NETWORKS = [
    {
        icon: '/images/icon-facebook.svg',
        url: 'https://www.facebook.com/'
    },
    {
        icon: '/images/icon-twitter.svg',
        url: 'https://twitter.com/'
    },
    {
        icon: '/images/icon-pinterest.svg',
        url: 'https://www.pinterest.com/'
    },
    {
        icon: '/images/icon-instagram.svg',
        url: 'https://www.instagram.com/'
    }
];

const StyledNextLink = styled(NextLink)({
    padding: '6px 8px',
    fontSize: '12px'
});

const Footer: React.FC = () => {
    const theme = useTheme();
    const isDesktopView = useMediaQuery('(min-width:375px)');

    return (
        <Box sx={{ background: theme.palette['very-dark-violet'].main, color: '#FFF', padding: '40px 0' }}>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    ...(!isDesktopView && {
                        flexFlow: 'column'
                    })
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: '50px',
                        ...(!isDesktopView && {
                            flexFlow: 'column',
                            textAlign: 'center',
                            gap: '20px'
                        })
                    }}
                >
                    {MENU_LIST.map((menu, i) => (
                        <Box key={i}>
                            <Button component={NextLink} sx={{ color: '#FFF' }} href={menu.url}>
                                {menu.name}
                            </Button>
                            {menu.children?.map((child, i) => (
                                <StyledNextLink key={i} href={child.url}>
                                    {child.name}
                                </StyledNextLink>
                            ))}
                        </Box>
                    ))}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '18px',
                            marginTop: '11px',
                            ...(!isDesktopView && {
                                justifyContent: 'center'
                            })
                        }}
                    >
                        {SOCIAL_NETWORKS.map((n, i) => (
                            <a key={i} href={n.url} target="_blank" rel="noreferrer">
                                <Image src={n.icon} width="20" height="20" />
                            </a>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
