'use strict';

import {NativeModules} from 'react-native';
import {create, fontManager} from '../common/StyleManager';

export default create({
    screenContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-around',
        paddingBottom: 20,

        ios: {
            paddingTop: 20,
        },
        android: {
            paddingTop: NativeModules.StatusBarManager.HEIGHT,
        }
    },

    centerVertical: {
        alignItems: 'center',
    },

    paragraph: {
        ...fontManager('light'),
        textAlign: 'center',
        color: '#fff',
    }
});