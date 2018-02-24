'use strict';

import {NativeModules} from 'react-native';
import {create} from '../common/StyleManager';

export default create({
    screenContainer: {
        flex: 1,
        alignItems: 'stretch',
        ios: {
            paddingTop: 20,
        },
        android: {
            paddingTop: NativeModules.StatusBarManager.HEIGHT,
        }
    },
});