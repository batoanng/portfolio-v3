import { css } from '@emotion/react';
import Link from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';
import { styled } from '@mui/material';

const isAbsoluteUrl = (url: string) => new RegExp('^(?:[a-z]+:)?//', 'i').test(url);

const StyledLink = styled('a')({
    display: 'block',
    textTransform: 'none !important' as any
});

type NextLinkProps = {
    href?: string;
};

const NextLink = React.forwardRef<HTMLAnchorElement, NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>>(
    function NextLink({ href, ...props }, ref) {
        const childRender = <StyledLink href={href} ref={ref} {...props} />;
        if (!href || isAbsoluteUrl(href)) return childRender;
        return (
            <Link href={href} passHref>
                {childRender}
            </Link>
        );
    }
);

export default NextLink;
