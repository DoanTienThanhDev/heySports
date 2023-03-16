import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { RNText, RNView, RNInput, RNButton } from 'components/core'
import { ContainerPage, TouchInput, DateTimeInput } from 'components/common'
import { SocialLogin } from 'components';

import { translate } from 'translate';
import { FONTS, COLORS } from 'themes';
import { CONSTANTS } from 'utils';
import { DATETIME } from 'extensions';
import { pushToMain } from 'navigation';
import { useSetLocalStore } from 'hooks';
interface IRegister {
  navigation: any
}

const Register = ({ navigation }: IRegister) => {
  const [loading, setLoading] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      dateOfBirth: '',
      gender: ''
    }, validationSchema: Yup.object({
      fullName: Yup.string().required(translate('AUTH.fullNameRequired')).max(50, translate('AUTH.fullNameMax')),
      email: Yup.string().email(translate('AUTH.emailInvalid')).required(translate('AUTH.emailRequired')),
      password: Yup.string().required(translate('AUTH.passwordRequired')).min(8, translate('AUTH.passwordMin')).max(32, translate('AUTH.passwordMax')),
      confirmPassword: Yup.string().required(translate('AUTH.confirmPasswordRequired')).oneOf([Yup.ref('password')], translate('AUTH.confirmPasswordNotMatch')),
      dateOfBirth: Yup.string().required(translate('AUTH.dateOfBirthRequired')),
      gender: Yup.string().required(translate('AUTH.genderRequired'))
    }),
    onSubmit: (values: IUserRegister) => { onRegister(values) }
  })

  const onRegister = (user: IUserRegister) => {
    setLoading(true)
    setTimeout(() => {
      useSetLocalStore<IUserRegister>(CONSTANTS.LOCAL_STORE_KEY.ACCESS_TOKEN, user)
      setLoading(false)
      pushToMain({ navigation })
    }, 2000);
  }

  const onSelectedInput = ({ field, value }: { field: string, value: string | Date }) => {
    formik.setFieldValue(field, field === 'gender' ? value : DATETIME.formatDateDisplay(value))
  }

  const onLoginApple = () => { }
  const onLoginFacebook = () => { }
  const onLoginGoogle = () => { }

  return (
    <ContainerPage navigation={navigation} hasInput >
      <RNText fontWeight="bold" textAlign='center' size={FONTS.s32} color={COLORS.primary}>
        {translate('AUTH.register')}
      </RNText>
      <RNView pHoz={24} mTop={FONTS.s24} fill>
        <RNInput
          title={translate('AUTH.fullName')}
          placeholder={translate('AUTH.fullNameHint')}
          isTouch={formik?.touched?.fullName}
          onChangeText={formik.handleChange('fullName')}
          value={formik.values.fullName}
          errorMessage={formik.errors.fullName}
        />
        <RNInput
          title={translate('AUTH.email')}
          placeholder={translate('AUTH.emailHint')}
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
          isTouch={formik.touched.email}
          errorMessage={formik.errors.email}
        />
        <DateTimeInput
          date={formik.values.dateOfBirth}
          title={translate('AUTH.dateOfBirth')}
          placeholder={translate('AUTH.dateOfBirthHint')}
          onSelectDateTime={(time) => onSelectedInput({ field: "dateOfBirth", value: time })}
          errorMessage={formik.errors.dateOfBirth}
          isTouch={formik.touched.dateOfBirth}
        />
        <TouchInput
          value={formik?.values?.gender}
          title={translate('AUTH.gender')}
          placeholder={translate('AUTH.genderHint')}
          onClickItem={(item) => onSelectedInput({ field: 'gender', value: item.name })}
          items={CONSTANTS.GENDERS}
          isTouch={formik.touched.gender}
          errorMessage={formik.errors.gender}
        />
        <RNInput
          value={formik.values.password}
          title={translate('AUTH.password')}
          placeholder={translate('AUTH.passwordHint')}
          onChangeText={formik.handleChange('password')}
          isTouch={formik.touched.password}
          errorMessage={formik.errors.password}
        />
        <RNInput
          value={formik.values.confirmPassword}
          title={translate('AUTH.confirmPassword')}
          placeholder={translate('AUTH.confirmPasswordHint')}
          onChangeText={formik.handleChange('confirmPassword')}
          isTouch={formik.touched.password}
          errorMessage={formik.errors.password}
        />
        <RNButton isLoading={loading} title={translate('AUTH.register')} mVer={32} onPress={formik.handleSubmit} />
        <RNView mTop={24}>
          <RNText textAlign='center' mBottom={10} fontWeight="400">{translate('AUTH.registerWith')}</RNText>
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
