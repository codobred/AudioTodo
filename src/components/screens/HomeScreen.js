'use strict';

import React from 'react';
import {Text, View} from 'react-native';
import {BgComponent, Logo, RoundButton} from '../common';
import SharedStyles from '../../js/styles/SharedStyles';

export default class extends React.Component {
    render() {
        return (
            <BgComponent>
                <View>
                    <Logo/>
                    <Text style={SharedStyles.paragraph}>
                        SRM Timer helps you track your progress{'\n'}
                        while practicing for Single Round{'\n'}
                        Matches.
                    </Text>
                </View>

                <View style={SharedStyles.centerVertical}>
                    <RoundButton text={'Start'}/>
                </View>
            </BgComponent>
        )
    }
}