import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity style={styles.conainer}>
        <View>
          <Text style={styles.textStyle}>hello Wotld</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conainer: {
    height: 50,
    width: 430,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  textStyle: {
    color: 'white',
  },
});
