import React from 'react'

import { RNText, RNView, RNInput, RNButton } from 'components/core'
import { ContainerPage } from 'components/common'
import { SocialLogin } from 'components';

import { FONTS, COLORS } from 'themes';

interface IRegister {
  navigation: any
}

const Register = ({ navigation }: IRegister) => {

  const onBack = () => {
    navigation.goBack()
  }

  const onLoginApple = () => { }
  const onLoginFacebook = () => { }
  const onLoginGoogle = () => { }


  return (
    <ContainerPage navigation={navigation} hasInput>
      <RNText fontWeight="bold" textAlign='center' size={FONTS.s32} color={COLORS.primary}>
        Register
      </RNText>
      <RNView pHoz={24} mTop={FONTS.s24} fill>
        <RNInput
          value={"Doan Tien Thanh"}
          title={'Full name'}
          placeholder={'Please enter your full name'}
        />
        <RNInput
          value={""}
          title={'Email'}
          placeholder={'Please enter your email'}
        />
        <RNInput
          value={""}
          title={'Email'}
          placeholder={'Please enter your email'}
        />
        <RNInput
          value={""}
          title={'Email'}
          placeholder={'Please enter your email'}
        />
        <RNInput
          value={""}
          title={'Email'}
          placeholder={'Please enter your email'}
        />
        <RNButton title='Register' mTop={32} onPress={onBack} />
        <RNView verContent='flex-end' fill>
          <RNText textAlign='center' mBottom={10} fontWeight="400">Register with</RNText>
          <SocialLogin
            onLoginApple={onLoginApple}
            onLoginFacebook={onLoginFacebook}
            onLoginGoogle={onLoginGoogle}
          />
        </RNView>
      </RNView>
    </ContainerPage>
  )
}

export default Register
