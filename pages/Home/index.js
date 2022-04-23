import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, Linking } from 'react-native';
import { IconButton, Button, Text } from 'react-native-paper';
import styles from './style';
import AppIntro from './appIntro';
import Slider from '@react-native-community/slider';
import axios from 'axios';

const Home = ({ navigation }) => {
    const [displayIntro, setDisplayIntro] = useState(true);
    const [amount, setAmount] = useState(2000);
    const [apiData, setApiData] = useState({});
    setTimeout(() => setDisplayIntro(false), 3000);

    useEffect(() => {
        axios.get('https://dev.amantradingcompany.in/api').then((response) => {
            setApiData(response.data.d);
        });
    }, []);

    
    const fireWhatsApp = () => {
        let whatsappUrl = 'whatsapp://send?text=Aman naam hai mera';
        Linking.openURL(whatsappUrl).then((data) => console.log(data));
    }
    return (
        <>
            {displayIntro ? (
                <AppIntro />
            ) : (
                <SafeAreaView style={styles.AndriodSafeArea}>
                    <ScrollView>
                        <View style={styles.container}>
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                }}
                            >
                                <IconButton
                                    style={styles.accIcon}
                                    icon="account"
                                    color="white"
                                    size={30}
                                    onPress={() => navigation.navigate('About')}
                                />
                                <Button
                                    uppercase={false}
                                    style={[styles.supportBtn]}
                                    color="white"
                                    mode="outlined"
                                    onPress={() => navigation.navigate('About')}
                                >
                                    <Text style={{ color: 'white', fontSize: 16 }}>Support</Text>
                                </Button>
                            </View>
                            <View style={styles.amountDisplayContainer}>
                                <Text style={{ color: 'white', fontWeight: '700' }}>Earn 13% p.a. on USDT</Text>
                                <Text style={{ color: '#DAF7A6', fontSize: 55, fontWeight: '700' }}>₹{amount}</Text>
                                <Text style={{ color: 'white' }}>≈ 124.67 USDT</Text>
                                <Text style={{ color: '#DAF7A6', fontWeight: '600', marginTop: 50 }}>Limited period offer</Text>
                            </View>
                            <View style={styles.sliderContainer}>
                                <Text style={{ color: 'white', marginTop: 40 }}>Slide to select an amount</Text>
                                <Slider
                                    style={{ width: 300, height: 40 }}
                                    minimumValue={2000}
                                    maximumValue={100000}
                                    minimumTrackTintColor="#FFFFFF"
                                    maximumTrackTintColor="#FFFFFF"
                                    thumbImage={require('../../assets/favicon.png')}
                                    onValueChange={(value) => setAmount(value)}
                                    step={2000}
                                />
                            </View>
                            <Button
                                onPress={() => console.log('Invest')}
                                uppercase={false}
                                style={{ width: '90%', marginTop: 30 }}
                                mode="contained"
                                color="white"
                            >
                                Invest now
                            </Button>
                            <View style={styles.inviteContainer}>
                                <Text style={{ fontSize: 16, color: 'white' }}>INVITE AND EARN 26% INTEREST</Text>
                                <Text style={{ marginTop: 20, color: 'gray' }}>
                                    Invite a friend and earn 26% interest for up to 1 year. Minimum 7 days guranteed.
                                </Text>
                                <Button
                                    color="#DAF7A6"
                                    style={styles.inviteButton}
                                    contentStyle={{ height: 45 }}
                                    uppercase={false}
                                    icon="whatsapp"
                                    mode="contained"
                                    onPress={() => fireWhatsApp()}
                                >
                                    Invite via Whatsapp
                                </Button>
                                <Button>
                                    <Text style={{ fontSize: 9, color: 'white' }}>More details --</Text>
                                </Button>
                            </View>
                            <View style={{ marginTop: 10, width: '100%', marginLeft: 20, marginBottom: 40 }}>
                                <Text style={{ color: 'white', fontSize: 22, fontWeight: '600', marginBottom: 20 }}>Key benefits</Text>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <View style={{ width: 300, height: 90, backgroundColor: '#DAF7A6', borderRadius: 10, marginRight: 20 }}></View>
                                    <View style={{ width: 300, height: 90, backgroundColor: '#DAF7A6', borderRadius: 10, marginRight: 20 }}></View>
                                    <View style={{ width: 300, height: 90, backgroundColor: '#DAF7A6', borderRadius: 10, marginRight: 20 }}></View>
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            )}
        </>
    );
};

export default Home;
