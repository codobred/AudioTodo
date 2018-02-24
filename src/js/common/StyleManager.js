import {Platform, StyleSheet} from 'react-native';

export function create(styles: Object): {[name: string]: number} {
    const platformStyles = {};
    Object.keys(styles).forEach((name) => {
        let {ios, android, ...style} = {...styles[name]};
        if (ios && Platform.OS === 'ios') {
            style = {...style, ...ios};
        }
        if (android && Platform.OS === 'android') {
            style = {...style, ...android};
        }
        platformStyles[name] = style;
    });
    return StyleSheet.create(platformStyles);
}

export function fontManager(weight) {
    const styles = {
        thin: {
            ios: {
                fontFamily: 'Helvetica Neue',
                fontWeight: '100',
            },
            android: {
                fontFamily: 'san-serif',
                fontWeight: '100',
            }
        },
        light: {
            ios: {
                fontFamily: 'Helvetica Neue',
                fontWeight: '300',
            },
            android: {
                fontFamily: 'san-serif',
                fontWeight: '300',
            }
        }
    };

    if (!styles.hasOwnProperty(weight)) {
        throw new Error('Undefined font weight: ', weight);
    }

    return styles[weight];
}