import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux';

const redux = () => (
    <Provider>
        <App />
    </Provider>
)


AppRegistry.registerComponent("ImIn", () => redux);
