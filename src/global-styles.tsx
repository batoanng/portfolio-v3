import { Global, css } from '@emotion/react';

export default function GlobalStyles() {
    return (
        <Global
            styles={css`
                html,
                body {
                    font-family: Poppins, system;
                    margin: 0;
                    padding: 0;
                }

                * {
                    box-sizing: border-box;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                    text-transform: none;
                }

                a:hover {
                    color: hsl(180, 66%, 49%);
                }
            `}
        />
    );
}
