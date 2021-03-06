import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from 'shared/App';
import store from 'store';

const Root = () => {
    return (
        <Provider store={store}>
          <BrowserRouter>
                <App/>
          </BrowserRouter>
        </Provider>
    );
};

export default Root;