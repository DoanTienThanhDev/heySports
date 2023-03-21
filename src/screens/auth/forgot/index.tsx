import React, { useState } from 'react'

import { RNButton, RNInput, RNText } from 'components/core'
import { AuthTemplate } from 'components';

import { translate } from 'translate';
import { IPage } from 'screens/schemes';
import { IMAGES, EFontWeight, ESPacing, EColors } from 'themes';
import { pushScreen } from 'navigation';
import { SCREENS_NAME, CONSTANTS } from 'utils';

interface IForgotPassword extends IPage { }

const ForgotPassword = ({ navigation }: IForgotPassword) => {
  const [email, setEmail] = useState<string>(__DEV__ ? CONSTANTS.LOGIN.email : "")
  const [loading, setLoading] = useState<boolean>(false)

  const onChangeEmail = (text: string) => {
    setEmail(text)
  }

  const onSend = () => {
    setLoading(true)
    setTimeout(() => {
      pushScreen({ screen: SCREENS_NAME.enterCode, navigation, params: email })
      setLoading(false)
    }, 500);
  }

  return (
    <AuthTemplate navigation={navigation} title={translate('AUTH.forgotPasswordTitle')} image={IMAGES.imgSecondIntro} >
      <RNText mTop={ESPacing.space_16} color={EColors.gray} fontWeight={EFontWeight.normal}>{translate('AUTH.msgEmail')}</RNText>
      <RNInput title={translate('AUTH.email')} value={email} placeholder={translate('AUTH.emailHint')} onChangeText={onChangeEmail} />
      <RNButton
        isLoading={loading}
        mTop={ESPacing.space_40}
        title={translate('COMMON.continue')}
        disable={!email?.includes('@')}
        bgColor={!email?.includes('@') ? EColors.bgDisable : EColors.primary}
        onPress={onSend}
      />
    </AuthTemplate>
  )
}

export default ForgotPassword
