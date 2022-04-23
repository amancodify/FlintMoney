import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'black',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    accIcon: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 50,
        borderColor: 'white',
    },
    supportBtn: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 50,
        borderColor: 'white',
        minWidth: 130,
        padding: 1,
    },
    amountDisplayContainer: {
        marginTop: 40,
        width: 330,
        height: 330,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 500,
        borderColor: '#DAF7A6',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inviteContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: '#1B1D18',
        // width: '95%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        borderColor: '#DAF7A6',
        padding: 10,
        color: 'white',
    },
    inviteButton: {
        marginTop: 20,
        backgroundColor: '#DAF7A6',
    },
    AndriodSafeArea: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    cardsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
