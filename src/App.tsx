import React from 'react';
import logo from './logo.png';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Global from './styles/global';
import Introduction from './components/Introduction';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';

function App() {
    const store = configureStore();

    return (
        <>
            <Global />
            <Provider store={store}>
                <Introduction />
                <BrowserRouter>
                    <MainPage />
                </BrowserRouter>
                <Navbar />
            </Provider>
        </>
    );
}

export default App;
