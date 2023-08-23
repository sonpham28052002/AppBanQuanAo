import React, {useRef, useEffect} from 'react';
import {View, Image, SafeAreaView, StatusBar, Animated, Easing} from 'react-native';

export default function Splash() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate('Home');
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.elastic(4),
    }).start();
  };

  useEffect(fadeIn, [fadeAnim]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} hidden={false} backgroundColor="white" />
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.Image
          style={{
            height: 300,
            resizeMode: 'contain',
            opacity: fadeAnim,
          }}
          source={require('../asset/slogon_nike.jpg')}
        />
        <Animated.Image
          style={{
            height: 100,
            resizeMode: 'contain',
            marginTop: -20,
            opacity: fadeAnim,
          }}
          source={require('../asset/logo_nike.jpg')}
        />
      </View>
    </SafeAreaView>
  );
}
