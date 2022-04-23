import React from 'react';
import { Button, SafeAreaView, Text } from 'react-native';
import styles from '../Home/style';

const About = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.AndriodSafeArea}>
            <Text>This is Support Page</Text>
            <Button title='Go Back' onPress={() => navigation.navigate('Home')} />
        </SafeAreaView>
    );
};

export default About;
