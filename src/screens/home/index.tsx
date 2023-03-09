import React, { useState } from 'react';

import { RNView, RNText, RNButton, RNContainer, RNInput } from 'components/core';
import { FONTS } from 'values';
import { Alert } from 'react-native';


const Home = () => {
  const [email, setEmail] = useState<string>('')

  const onChangeText = (value: string) => {
    setEmail(value)
  }

  const onPress = () => {
    Alert.alert('sss')
  }

  return (
    <RNContainer>
      <RNView fill pHoz={28} >
        <RNText size={FONTS.s32} >center</RNText>
        <RNView mTop={100} h={50}    >
          <RNButton title='Submit' fill onPress={onPress} />
        </RNView>
        <RNInput title='Email' value={email} onChangeValue={onChangeText} />
        <RNInput title='Email' value={''} onChangeValue={onChangeText} />
      </RNView>
    </RNContainer>
  );
};

export default Home;
