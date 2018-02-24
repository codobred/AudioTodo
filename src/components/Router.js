'use strict';

import React from 'react';
import {Router, Scene, Lightbox} from 'react-native-router-flux';

// import screens
import {HomeScreen} from './screens';

export default () => {
    return (
        <Router>
            <Lightbox>
                <Scene key={'root'} hideNavBar>
                    <Scene key={'Home'} initial={true} component={HomeScreen} />
                </Scene>
            </Lightbox>
        </Router>
    );
}
