import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { theme } from '../src/styles/theme';
import { store } from '../src/store';
import GlobalStyles from '../src/global-styles';
import Layout from '../src/components/layout';

const queryClient = new QueryClient({
    defaultOptions: {
        mutations: {
            onError: (err) => console.error(err)
        },
        queries: {
            onError: (err) => console.error(err),
            retry: 2
        }
    }
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </QueryClientProvider>
        </Provider>
    );
}

export default MyApp;
