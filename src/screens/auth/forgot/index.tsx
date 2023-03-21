import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { RNContainer, RNInput, RNText } from 'components/core'
import { ContainerPage } from 'components/common';
import { AuthTemplate } from 'components';

import { translate } from 'translate';
import { IPage } from 'screens/schemes';
import { EFontWeight, ESPacing, IMAGES } from 'themes';

interface IForgotPassword extends IPage { }

const ForgotPassword = ({ navigation }: IForgotPassword) => {
  const [email, setEmail] = useState<string>('')

  const onChangeEmail = (text: string) => {
    setEmail(text)
  }

  const onSend = () => {

  }

  return (
    <AuthTemplate navigation={navigation} title={translate('AUTH.enterEmail')} image={IMAGES.imgSecondIntro} >
      <RNText mTop={ESPacing.space_16} fontWeight={EFontWeight.medium}>{translate('AUTH.msgEmail')}</RNText>

    </AuthTemplate>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})