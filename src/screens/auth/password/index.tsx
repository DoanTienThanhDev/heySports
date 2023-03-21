import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { RNInput, RNButton } from 'components/core';
import { AuthTemplate } from 'components';

import { CONSTANTS } from 'utils';
import { ESPacing, IMAGES } from 'themes';

import { translate } from 'translate';
import { useSetLocalStore } from 'hooks';
import { pushToMain } from 'navigation';
import { IPage } from 'screens/schemes';
interface IPassword extends IPage {
  isChangePassword: boolean,
}

interface IPasswordInfo extends IUserInfo {
  currentPassword?: string,
  confirmPassword?: string,
}

const Password = ({ navigation, isChangePassword, route }: IPassword) => {
  const [loading, setLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      gender: '',
      password: '',
      currentPassword: '',
      confirmPassword: ''
    }, validationSchema: Yup.object({
      currentPassword: isChangePassword ? Yup.string().required(translate('AUTH.currentPasswordRequired')) : Yup.string(),
      password: Yup.string().required(translate('AUTH.passwordRequired')).min(8, translate('AUTH.passwordMin')).max(32, translate('AUTH.passwordMax')),
      confirmPassword: Yup.string().required(translate('AUTH.confirmPasswordRequired')).oneOf([Yup.ref('password')], translate('AUTH.confirmPasswordNotMatch'))
    }),
    onSubmit: (values: IPasswordInfo) => {
      onSubmit(values)
    }
  })

  useEffect(() => {
    let user: IUserInfo = route.params
    if (user?.email) {
      formik.setValues({
        email: user.email,
        fullName: user.fullName,
        gender: user.gender,
        password: __DEV__ ? CONSTANTS.LOGIN.password : '',
        confirmPassword: __DEV__ ? CONSTANTS.LOGIN.password : ''
      })
    }
  }, [route.params])

  const onSubmit = (data: IPasswordInfo) => {
    setLoading(true)
    setTimeout(() => {
      useSetLocalStore<IPasswordInfo>(CONSTANTS.LOCAL_STORE_KEY.accessToken, data)
      pushToMain({ navigation })
    }, 1000);
  }

  return (
    <AuthTemplate navigation={navigation} image={IMAGES.imgSecondIntro} title={route?.params?.title || translate('AUTH.password')}>
      {
        isChangePassword && <RNInput
          title={translate('AUTH.currentPassword')}
          placeholder={translate('AUTH.currentPasswordHint')}
          onChangeText={formik.handleChange('currentPassword')}
          value={formik.values.currentPassword}
          isTouch={formik.touched.currentPassword}
          errorMessage={formik.errors.currentPassword}
          isPassword
        />
      }
      < RNInput
        title={translate('AUTH.password')}
        placeholder={translate('AUTH.passwordHint')}
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        isTouch={formik.touched.password}
        errorMessage={formik.errors.password}
        isPassword
      />
      <RNInput
        title={translate('AUTH.confirmPassword')}
        placeholder={translate('AUTH.confirmPasswordHint')}
        onChangeText={formik.handleChange('confirmPassword')}
        isTouch={formik.touched.confirmPassword}
        value={formik.values.confirmPassword}
        errorMessage={formik.errors.confirmPassword}
        isPassword
      />
      <RNButton mTop={ESPacing.space_32} isLoading={loading} title={translate('COMMON.submit')} mVer={ESPacing.space_32} onPress={formik.handleSubmit} />
    </AuthTemplate>
  )
}

export default Password
