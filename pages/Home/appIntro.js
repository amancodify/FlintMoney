import React from 'react';
import { Text } from 'react-native-paper';
import { View, Image } from 'react-native';
import styles from './style';

const AppIntro = () => {
    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'tomato', height: '100%', paddingTop: 20 }}>
            <Text style={{ marginBottom: 10 }}>App Title</Text>
            <Image style={styles.tinyLogo} source={require('../../assets/favicon.png')} />
        </View>
    );
};

export default AppIntro;
