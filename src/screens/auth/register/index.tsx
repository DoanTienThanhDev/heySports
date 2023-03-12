import React, { useState } from 'react'

import { RNText, RNView, RNInput, RNButton } from 'components/core'
import { ContainerPage, TouchInput } from 'components/common'
import { SocialLogin } from 'components';

import { FONTS, COLORS } from 'themes';
import { CONSTANTS } from 'utils';
import { IItemTouch } from 'screens/schemes';
interface IRegister {
  navigation: any
}

const Register = ({ navigation }: IRegister) => {
  const [gender, setGender] = useState<IItemTouch>()

  const onRegister = () => {
    navigation.goBack()
  }

  const onSelectedGender = (item: IItemTouch) => {
    setGender(item)
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
          value={''}
          title={'Full name'}
          placeholder={'Please enter full name'}
          onChangeValue={() => { }}
        />
        <RNInput
          value={""}
          title={'Email'}
          placeholder={'Please enter your email'}
          onChangeValue={() => { }}
        />
        <RNInput
          value={""}
          title={'Date of birth'}
          placeholder={'Please enter date of birth'}
          onChangeValue={() => { }}
        />
        <TouchInput
          value={gender?.name}
          title={'Gender'}
          placeholder={'Please select gender'}
          onClickItem={onSelectedGender}
          items={CONSTANTS.GENDERS}
        />
        <RNButton title='Register' mTop={32} onPress={onRegister} />
        <RNView mTop={100}>
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
