'use strict';

import React from 'react';
import {Text} from 'react-native';
import {BgComponent} from '../common';
import SharedStyles from '../../js/styles/SharedStyles';

export default class extends React.Component {
    render() {
        return (
            <BgComponent>
                <Text>
                    Home Screen
                </Text>
            </BgComponent>
        )
    }
}