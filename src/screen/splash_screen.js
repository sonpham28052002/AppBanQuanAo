import React, {useRef, useEffect} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Animated,
  Easing,
  ActivityIndicator
} from 'react-native';

export default function Splash() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate('Home');
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);
  // const SCALE = useRef(new Animated.Value(0)).current;
  // SCALE.animate({0:{rotate:0}, 1:{rotate:1}})
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.elastic(4),
    }).start();
  };

  const size = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });

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
            height: size,
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
      <View style={{justifyContent: 'center', alignItems: 'center', marginBottom:20}}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    </SafeAreaView>
  );
}
