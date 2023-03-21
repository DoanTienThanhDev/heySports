import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'

import { RNButton, RNInput, RNView, RNText } from 'components/core';
import { SocialLogin, AuthTemplate } from 'components';

import { IMAGES, EColors, EFontWeight, ETextAlign, ESPacing } from 'themes';
import { CONSTANTS, SCREENS_NAME } from 'utils';

import { translate } from 'translate';
import { pushScreen, pushToMain } from 'navigation';
import { useSetLocalStore } from 'hooks';
import { IPage } from 'screens/schemes';

interface ILogin extends IPage { }

const Login = ({ navigation }: ILogin) => {
  const [loading, setLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      email: __DEV__ ? CONSTANTS.LOGIN.email : '',
      password: __DEV__ ? CONSTANTS.LOGIN.password : '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required(translate('AUTH.emailRequired')).email(translate('AUTH.emailInvalid')),
      password: Yup.string().required(translate('AUTH.passwordRequired')).min(8, translate('AUTH.passwordMin')).max(32, translate('AUTH.passwordMax')),
    }),
    onSubmit: (values) => {
      onLogin(values)
    },
  });

  const onPushScreen = (screen: string) => () => {
    pushScreen({ screen, navigation })
  }

  const onLogin = ({ email, password }: IUserLogin) => {
    setLoading(true)
    setTimeout(() => {
      useSetLocalStore<IUserLogin>(CONSTANTS.LOCAL_STORE_KEY.accessToken, { email, password })
      setLoading(false)
      pushToMain({ navigation })
    }, 2000);
  }

  return (
    <AuthTemplate navigation={navigation} title={translate('AUTH.login')} isBackIcon={false} image={IMAGES.imgSecondIntro}>
      <RNInput
        title={translate('AUTH.email')}
        placeholder={translate('AUTH.emailHint')}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        errorMessage={formik.errors.email}
        isTouch={formik.touched.email}
      />
      <RNInput
        title={translate('AUTH.password')}
        placeholder={translate('AUTH.passwordHint')}
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        errorMessage={formik.errors.password}
        isTouch={formik.touched.password}
      />
      <RNText mTop={ESPacing.space_4} onPress={onPushScreen(SCREENS_NAME.forgotPassword)} color={EColors.primary}>{translate('AUTH.forgotPassword')}</RNText>
      <RNButton mTop={ESPacing.space_32} isLoading={loading} title={translate('AUTH.login')} onPress={formik.handleSubmit} />
      <RNView isRow center mVer={ESPacing.space_32}>
        <RNView h={ESPacing.space_1} fill mHoz={ESPacing.space_15} color={EColors.border} />
        <RNText>{translate('COMMON.or')}</RNText>
        <RNView h={ESPacing.space_1} fill mHoz={ESPacing.space_15} color={EColors.border} />
      </RNView>
      <RNView >
        <SocialLogin
          onLoginApple={formik.handleSubmit}
          onLoginFacebook={formik.handleSubmit}
          onLoginGoogle={formik.handleSubmit} />
      </RNView>
      <RNText textAlign={ETextAlign.center} mTop={ESPacing.space_16}>
        {translate('AUTH.newToLogistics')}
        <RNText onPress={onPushScreen(SCREENS_NAME.register)} fontWeight={EFontWeight.medium} color={EColors.primary}>{translate('AUTH.register')}</RNText>
      </RNText>
    </AuthTemplate>

  )
}

export default Login
