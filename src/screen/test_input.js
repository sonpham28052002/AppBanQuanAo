import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {TextInput} from 'react-native-paper';
export default function InputBox(props) {
  const [check, setcheck] = useState(false);
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Email"
        secureTextEntry={check}
        style={{width: '90%'}}
        right={
          <TextInput.Icon
            icon={check ? 'eye' : 'eye-off'}
            onPress={() => {
              setcheck(!check);
            }}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    // borderColor: COLORS.WHITE,
  },
  input: {
    // fontFamily: FONT_FAMILY.primaryMedium,
    fontSize: 14,
    height: 37,
    // color: COLORS.WHITE,
  },
  label: {
    // fontFamily: FONT_FAMILY.primary,
    marginLeft: 5,
    // color: COLORS.WHITE,
    fontSize: 12,
    //  marginTop: -30,
  },
});
