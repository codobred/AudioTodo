'use strict';

import React from 'react';
import {StatusBar, Platform} from 'react-native';

import {Provider} from 'react-redux';
import createStore from './js/store/createStore';
import reducers from './js/reducers';

import Router from './components/Router';

export default class extends React.Component {
    constructor(props) {
        super(props);

        (Platform.select({
            ios: () => {
                StatusBar.setBarStyle('light-content');
            },
            android: () => {
                StatusBar.setTranslucent(true);
                StatusBar.setBarStyle('light-content');
                StatusBar.setBackgroundColor('#C644FC');
            },
        }))();
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Router/>
            </Provider>
        );
    }
}