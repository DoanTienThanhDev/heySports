import { StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { RNButton, RNImage, RNInput, RNPressable, RNText, RNView } from 'components/core';
import { ContainerPage } from 'components/common';

import { COLORS, SCREENS, IMAGES, FONTS } from 'themes';



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

  const onLoginGoogle = () => {

  }

  const onLoginFacebook = () => { }

  const onLoginApple = () => { }

  return (
    <ContainerPage id={componentId}>
      <RNView fill center>
        <RNImage src={IMAGES.imgLogo} size={SCREENS.width / 2.5} />
        <RNText color={COLORS.primary} fontWeight="600">You are finding, we are finding</RNText>
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
        <RNButton title='Login' onPress={onLogin} mTop={60} />

        <RNView fill verContent='flex-end' hozContent='flex-end'>
          <RNView isRow mBottom={FONTS.s16}>
            <RNPressable fill center onPress={onLoginGoogle}>
              <RNImage src={IMAGES.icGoogle} size={60} />
            </RNPressable>
            <RNPressable fill center onPress={onLoginFacebook}>
              <RNImage src={IMAGES.icFacebook} size={60} />
            </RNPressable>
            <RNPressable fill center onPress={onLoginApple}>
              <RNImage src={IMAGES.icApple} size={60} />
            </RNPressable>
          </RNView>
        </RNView>
      </RNView>
    </ContainerPage>
  )
};

export default Login;
