import { Global, css } from '@emotion/react';

export default function GlobalFonts() {
    return (
        <Global
            styles={css`
                @font-face {
                    font-family: system;
                    src: local(-apple-system), local(BlinkMacSystemFont), local('Segoe UI'), local(Roboto),
                        local(Oxygen), local(Ubuntu), local(Cantarell), local('Fira Sans'), local('Droid Sans'),
                        local('Helvetica Neue'), local(sans-serif);
                }
                @font-face {
                    font-family: 'Poppins';
                    font-weight: 700;
                    src: url('/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
                }
                @font-face {
                    font-family: 'Poppins';
                    font-weight: 500;
                    src: url('/fonts/Poppins/Poppins-Medium.ttf') format('truetype');
                }
            `}
        />
    );
}
