import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { RNText, RNInput, RNButton } from 'components/core'
import { TouchInput } from 'components/common'
import { AuthTemplate } from 'components';

import { translate } from 'translate';
import { popScreen, pushScreen } from 'navigation';
import { IPage } from 'screens/schemes';
import { IMAGES, EColors, ETextAlign, EFontWeight, ESPacing } from 'themes';
import { CONSTANTS, SCREENS_NAME } from 'utils';

interface IRegister extends IPage { }

const Register = ({ navigation }: IRegister) => {
  const formik = useFormik({
    initialValues: {
      fullName: __DEV__ ? CONSTANTS.LOGIN.fullName : '',
      email: __DEV__ ? CONSTANTS.LOGIN.email : '',
      gender: __DEV__ ? CONSTANTS.LOGIN.gender : "",
      password: '',
    }, validationSchema: Yup.object({
      fullName: Yup.string().required(translate('AUTH.fullNameRequired')).max(50, translate('AUTH.fullNameMax')),
      email: Yup.string().email(translate('AUTH.emailInvalid')).required(translate('AUTH.emailRequired')),
      gender: Yup.string().required(translate('AUTH.genderRequired'))
    }),
    onSubmit: (values: IUserInfo) => { onContinue(values) }
  })

  const onContinue = (user: IUserInfo) => {
    pushScreen<IUserInfo>({ navigation, screen: SCREENS_NAME.password, params: user })
  }

  const onLogin = () => {
    popScreen({ navigation })
  }

  const onSelectGender = (value: IItemTouch) => {
    formik.setFieldValue('gender', value.name)
  }

  return (
    <AuthTemplate navigation={navigation} image={IMAGES.imgSecondIntro} title={translate('AUTH.signUp')}>
      <RNInput
        title={translate('AUTH.email')}
        placeholder={translate('AUTH.emailHint')}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        isTouch={formik.touched.email}
        errorMessage={formik.errors.email}
      />
      <RNInput
        title={translate('AUTH.fullName')}
        placeholder={translate('AUTH.fullNameHint')}
        isTouch={formik?.touched?.fullName}
        onChangeText={formik.handleChange('fullName')}
        value={formik.values.fullName}
        errorMessage={formik.errors.fullName}
      />
      <TouchInput
        value={formik?.values?.gender}
        title={translate('AUTH.gender')}
        placeholder={translate('AUTH.genderHint')}
        onClickItem={onSelectGender}
        items={CONSTANTS.GENDERS}
        isTouch={formik.touched.gender}
        errorMessage={formik.errors.gender}
      />
      <RNText mTop={ESPacing.space_10}>
        {translate('AUTH.msgSignUpRequired')}
        <RNText color={EColors.primary} fontWeight={EFontWeight.medium}>{translate('AUTH.temps&conditions')}</RNText>
        {translate('COMMON.and')}
        <RNText color={EColors.primary} fontWeight={EFontWeight.medium}>{translate('AUTH.privacyPolicy')}</RNText>
      </RNText>
      <RNButton mTop={ESPacing.space_32} title={translate('COMMON.continue')} mVer={ESPacing.space_32} onPress={formik.handleSubmit} />
      <RNText textAlign={ETextAlign.center}>{translate('AUTH.joinedUsBefore')}
        <RNText color={EColors.primary} fontWeight={EFontWeight.medium} onPress={onLogin}>{translate('AUTH.login')}</RNText>
      </RNText>
    </AuthTemplate>
  )
}

export default Register
