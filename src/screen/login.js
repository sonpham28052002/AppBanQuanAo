import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {CheckBox, Icon} from '@rneui/themed';

export default function login() {
  const check = useRef(true);
  const [check1, setCheck1] = useState(false);
  const [isSelected, setSelection] = React.useState(check.current);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: 'red', width: 150}}>
        <Image source={require('./../asset/imgae1.jpg')} />
      </View>
      <View>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 35,
            marginLeft: 20,
          }}>
          Welcome
        </Text>
      </View>
      <View style={{marginTop: 50, marginLeft: 35}}>
        <View>
          <Text style={styles.TextStyle}>Email</Text>
          <TextInput
            placeholder="sonpham28052002@gmail.com"
            containerStyle={styles.search}
            clearButtonMode="unless-editing"
            style={{
              borderRadius: 15,
              backgroundColor: 'white',
              width: 320,
              height: 50,
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.TextStyle}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={{
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 15,
              backgroundColor: 'white',
              width: 320,
              height: 50,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 5,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            containerStyle={{backgroundColor: '#6441A5' }}
            wrapperStyle= {{backgroundColor: '#6441A5' }}
            textStyle={{color: 'white'}}
            title="Reamember me"
            checked={check1}
            onPress={() => setCheck1(!check1)}
          />
        </View>
        <Text
          style={{
            fontStyle: 'normal',
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}>
          Forgot Password?
        </Text>
      </View>
      <View
        style={{marginTop: 50, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          title="Login"
          style={{
            height: 50,
            width: 320,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>
          Don't have an account?
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: 18,
            textDecorationLine: 'underline',
            textDecorationColor: 'white',
          }}>
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6441A5',
    paddingTop: 50,
    paddingLeft: 20,
  },
  TextStyle: {
    fontSize: 18,
    marginLeft: 10,
    color: 'white',
  },
});
