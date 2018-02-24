import React from 'react';
import {ImageBackground} from 'react-native';
import SharedStyles from '../../js/styles/SharedStyles';

const BgComponent = ({children}) => {
    return (
        <ImageBackground
            style={SharedStyles.screenContainer}
            resizeMod={'contain'}
            source={require('../../assets/img/background/bg.jpg')}
        >
            {children}
        </ImageBackground>
    );
};

export {BgComponent};