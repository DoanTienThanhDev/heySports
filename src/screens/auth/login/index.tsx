import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'

import { RNButton, RNImage, RNInput, RNView, RNContainer, RNText } from 'components/core';
import { SocialLogin } from 'components';

import { translate } from 'translate';
import { IPage } from 'screens/schemes';
import { pushScreen, pushToMain } from 'navigation';

import { COLORS, IMAGES, SCREENS } from 'themes';
import { useSetLocalStore } from 'hooks';
import { CONSTANTS } from 'utils';

interface ILogin extends IPage { }

const Login = ({ navigation }: ILogin) => {
  const [loading, setLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      email: __DEV__ ? 'thanhdoandev@gmail.com' : '',
      password: __DEV__ ? 'Password!23' : '',
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
      useSetLocalStore<IUserLogin>(CONSTANTS.LOCAL_STORE_KEY.ACCESS_TOKEN, { email, password })
      setLoading(false)
      pushToMain({ navigation })
    }, 2000);
  }

  return (
    <RNContainer hasInput >
      <RNView fill center>
        <RNImage src={IMAGES.imgLogo} size={SCREENS.width / 2.2} />
        <RNText fontWeight='400' color={COLORS.primary}>{translate('APP.subTitle')}</RNText>
      </RNView>
      <RNView flex={2} pHoz={24}>
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
        <RNText mTop={4} onPress={onPushScreen("Forgot")} color={COLORS.primary}>{translate('AUTH.forgotPassword')}</RNText>
        <RNButton mTop={32} isLoading={loading} title={translate('AUTH.login')} onPress={formik.handleSubmit} />
        <RNView mTop={100} >
          <RNText textAlign='center' mBottom={12}>
            <RNText color={COLORS.primary} fontWeight="600" onPress={onPushScreen('Register')}>{translate('AUTH.register')}</RNText>
            {` ${translate('AUTH.orLoginWith')}`}
          </RNText>
          <SocialLogin
            onLoginApple={formik.handleSubmit}
            onLoginFacebook={formik.handleSubmit}
            onLoginGoogle={formik.handleSubmit} />
        </RNView>
      </RNView>
    </RNContainer>
  )
}

export default Login
