'use strict';

import React from 'react';
import {Router, Scene, Modal} from 'react-native-router-flux';

// import screens
import {HomeScreen} from './screens';

export default () => {
    return (
        <Router>
            <Modal>
                <Scene key={'root'} hideNavBar>
                    <Scene key={'Home'} initial={true} component={HomeScreen} />
                </Scene>
            </Modal>
        </Router>
    );
}
