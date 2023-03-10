import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import { RNButton, RNImage, RNInput, RNText, RNView } from 'components/core';
import { ContainerPage } from 'components/common';

import { IMAGES } from 'assets';
import { COLORS, SCREENS } from '../../../values';



interface ILogin {
  componentId: string
}

const Login = ({ componentId }: ILogin) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeValue = (text: string, field: string) => {
    if (field === 'email') {
      setEmail(text)
    } else {
      setPassword(text)
    }
  }

  const onLogin = () => { }

  return (
    <ContainerPage id={componentId}>
      <RNView fill center>
        <RNImage src={IMAGES.imgLogo} size={SCREENS.width / 2} />
        <RNText mTop={-15} color={COLORS.primary} fontWeight="600">You are finding, we are finding</RNText>
      </RNView>
      <RNView flex={2} pHoz={24}>
        <RNInput
          onChangeValue={(value: string) => onChangeValue(value, 'email')}
          title={'Email'}
          placeholder={'Please enter your email'}
          value={email}
          type={'email-address'}
        />
        <RNInput
          onChangeValue={(value: string) => onChangeValue(value, 'password')}
          isPassword title={'Password'}
          placeholder={'Please enter your password'}
          value={password}
        />
        <RNButton title='Login' onPress={onLogin} mTop={50} />
      </RNView>
    </ContainerPage>
  )
};

export default Login;

const styles = StyleSheet.create({});
