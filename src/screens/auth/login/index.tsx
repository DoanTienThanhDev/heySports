import React from 'react'

import { IPage } from 'screens/schemes';
import { RNButton, RNImage, RNInput, RNView, RNContainer, RNText } from 'components/core';
import { SocialLogin } from 'components';

import { pushScreen } from 'navigation';
import { COLORS, IMAGES, SCREENS, FONTS } from 'themes';

interface ILogin extends IPage { }

const Login = ({ navigation }: ILogin) => {

  const onPushScreen = (screen: string): void => {
    pushScreen({ screen, navigation })
  }

  return (
    <RNContainer hasInput >
      <RNView fill center>
        <RNImage src={IMAGES.imgLogo} size={SCREENS.width / 2.2} />
        <RNText fontWeight='400' color={COLORS.primary}>You are finding, we are finding</RNText>
      </RNView>
      <RNView flex={1.5} pHoz={24}>
        <RNInput
          title='Email'
          placeholder={'Please enter your email'}
          onChangeValue={() => { }}
        />
        <RNInput title='Password' placeholder={'Please enter your password'} onChangeValue={() => { }} />
        <RNText mTop={4} onPress={() => onPushScreen("Forgot")} color={COLORS.primary}>Forgot password</RNText>
        <RNButton mTop={32} title="Login" onPress={() => { }} />
        <RNView mTop={100} >
          <RNText textAlign='center' mBottom={12}>
            <RNText color={COLORS.primary} fontWeight="600" onPress={() => onPushScreen('Register')}>{'Register '}</RNText>
            or login with
          </RNText>
          <SocialLogin
            onLoginApple={() => { }}
            onLoginFacebook={() => { }}
            onLoginGoogle={() => { }} />
        </RNView>
      </RNView>
    </RNContainer>
  )
}

export default Login
