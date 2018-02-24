'use strict';

import React from 'react';
import {View, Text} from 'react-native';
import {create, fontManager} from '../../js/common/StyleManager';

const Logo = () => {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>SRM Timer</Text>
      </View>
    );
};

const styles = create({
    container: {
        alignItems: 'center',
        marginBottom: 100,
    },
    text: {
        ...fontManager('thin'),
        fontSize: 60,
        color: '#fff',
    }
});

export {Logo};