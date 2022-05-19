import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string } from 'prop-types';

function Hellow(props) {
    const {children} = props;
    return(
        <View>
            <Text style={Styles.text}>
                'Hello {children}'
                </Text>
        </View>
    );
}

Hellow.propTypes = {
    children: string.isRequired,
}
export default Hellow;

const Styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16,
    },
});

