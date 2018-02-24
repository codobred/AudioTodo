'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, View, Text} from 'react-native';
import {create, fontManager} from '../../js/common/StyleManager';

class RoundButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            is_pressed: false,
        };
    }

    render() {
        const {text} = this.props;
        const {is_pressed} = this.state;

        return (
            <TouchableWithoutFeedback
                onPressIn={() => this.setState({is_pressed: true})}
                onPressOut={() => this.setState({is_pressed: false})}
                onPress={this.props.onPress}
            >
                <View style={[styles.container, is_pressed && styles.containerPressed]}>
                    <Text style={[styles.text, is_pressed && styles.textPressed]}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const SIZE = 90;

const styles = create({
    container: {
        height: SIZE,
        width: SIZE,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: SIZE / 2,
        borderWidth: 1,
        borderColor: '#fff',
    },
    containerPressed: {
        borderColor: 'rgba(255,255,255, 0.5)',
    },
    text: {
        ...fontManager('light'),
        fontSize: 14,
        color: '#fff',
    },
    textPressed: {
        color: 'rgba(255,255,255, 0.5)',
    }
});

RoundButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

RoundButton.defaultProps = {
    text: '',
    onPress: () => {},
};

export {RoundButton};