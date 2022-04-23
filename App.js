import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './router';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
    },
};

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <AppRouter />
            </NavigationContainer>
        </PaperProvider>
    );
}
