import React, { useState } from 'react';

import { RNButton, RNImage, RNInput, RNText, RNView } from 'components/core';
import { ContainerPage } from 'components/common';
import { SocialLogin } from 'components';

import { pushScreen } from 'navigation';
// import { COLORS, SCREENS, IMAGES, FONTS } from 'themes';

interface ILogin {
  navigation: any
}

const Login = ({ navigation }: ILogin) => {

  const [email, setEmail] = useState<string>('sss');
  const [password, setPassword] = useState<string>('');

  const onChangeValue = (text: string, field: string) => {
    if (field === 'email') {
      setEmail(text)
    } else {
      setPassword(text)
    }
  }

  const onLogin = () => {
    pushScreen({ screen: 'Home', navigation })
  }

  const onLoginGoogle = () => { }

  const onLoginFacebook = () => { }

  const onLoginApple = () => { }

  const onForgotPassword = () => {
    pushScreen({ screen: 'ForgotPassword', navigation })
  }

  const onRegister = () => {
    pushScreen({ screen: 'Register', navigation })
  }

  return (
    <ContainerPage navigation={navigation} hasInput={true} >
      <RNView fill center >
        {/* <RNImage src={IMAGES.imgLogo} size={SCREENS.width / 2.5} /> */}
        {/* <RNText color={COLORS.primary} fontWeight="600">You are finding, we are finding</RNText> */}
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
        <RNText
          // size={FONTS.s14}
          fontWeight={'400'}
          underLine mTop={6}
          // color={COLORS.primary}
          onPress={onForgotPassword}
        >Forgot password</RNText>
        <RNButton title='Login' onPress={onLogin} mTop={60} />
        <RNView fill mTop={50}>
          <RNText
            textAlign='center'
            mBottom={10}
          // size={FONTS.s14}
          // color={COLORS.primaryText}
          >
            {/* <RNText color={COLORS.primary} fontWeight='600' onPress={onRegister}>
              {`Register `}
            </RNText> */}
            {`or login with`}
          </RNText>
          <SocialLogin
            onLoginGoogle={onLoginApple}
            onLoginFacebook={onLoginFacebook}
            onLoginApple={onLoginApple}
          />
        </RNView>
      </RNView>
    </ContainerPage>
  )
};

export default Login;
