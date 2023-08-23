import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  StatusBar,
} from 'react-native';

export default function App() {
  const refView = useRef(0);
  const [docu, setDocu] = useState(refView.current);
  return (
    <SafeAreaView style={styles.conainer}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle={'light-content'}
        showHideTransition={'slide'}
        hidden={false}
      />
      <View
        style={{justifyContent: 'center', alignItems: 'center', height: 400}}>
        <Image
          style={styles.image}
          source={require('./../asset/onboardImage.png')}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          paddingHorizontal: 70,
          paddingBottom: 40,
        }}>
        <View>
          <Text style={styles.textStyle}>Delicious Food</Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 17,
              color: 'gray',
              marginTop: 10,
            }}>
            We help you to find best and delicious food
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          marginBottom: 100,
        }}>
        <View
          style={{
            backgroundColor: docu === 0 ? '#F9813A' : 'gray',
            width: docu === 0 ? 30 : 10,
            height: 10,
            borderRadius: 50,
            marginRight: 15,
          }}></View>
        <View
          style={{
            backgroundColor: docu === 1 ? '#F9813A' : 'gray',
            width: docu === 1 ? 30 : 10,
            height: 10,
            borderRadius: 50,
            marginRight: 15,
          }}></View>
        <View
          style={{
            backgroundColor: docu === 2 ? '#F9813A' : 'gray',
            width: docu === 2 ? 30 : 10,
            height: 10,
            borderRadius: 50,
            marginRight: 15,
          }}></View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            docu < 2
              ? (refView.current = refView.current + 1)
              : (refView.current = 0);
            setDocu(refView.current);
            console.log(docu);
          }}
          activeOpacity={0.6}
          style={{
            backgroundColor: '#F9813A',
            width: 100,
            height: 40,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              Get Start
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  image: {
    width: 400,
    resizeMode: 'contain',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
