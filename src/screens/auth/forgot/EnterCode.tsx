import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import {
  CodeField,
  Cursor
} from 'react-native-confirmation-code-field';

import { RNButton, RNText } from 'components/core'
import { AuthTemplate } from 'components';

import { translate } from 'translate';
import { IPage } from 'screens/schemes';
import { IMAGES, EFontWeight, ESPacing, EColors, ETextAlign, EFontSize } from 'themes';
import { pushScreen } from 'navigation';
import { SCREENS_NAME } from 'utils';

interface IEnterCode extends IPage { }

const CELL_COUNT = 6

const EnterCode = ({ navigation, route }: IEnterCode) => {
  const [code, setCode] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const onRestPassword = () => {
    setLoading(true)
    setTimeout(() => {
      pushScreen({ screen: SCREENS_NAME.password, navigation, params: { title: translate('AUTH.resetPassword') } })
      setLoading(false)
    }, 500);
  }

  const reSend = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  return (
    <AuthTemplate navigation={navigation} title={translate('AUTH.enterCode')} image={IMAGES.imgSecondIntro} >
      <RNText mTop={ESPacing.space_16} color={EColors.gray} fontWeight={EFontWeight.normal}>{translate('AUTH.msgEnterCode')}
        <RNText fontWeight={EFontWeight.medium} color={EColors.primary}>{route.params}</RNText>
      </RNText>
      <CodeField
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        keyboardType="number-pad"
        rootStyle={styles.container}
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <RNText
            size={EFontSize.size_24}
            fontWeight={EFontWeight.medium}
            textAlign={ETextAlign.center}
            style={[styles.codeFiled, isFocused && styles.focusCell]}
            key={index}
            color={EColors.primary}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </RNText>
        )} />
      <RNText onPress={reSend} textAlign={ETextAlign.center} mTop={ESPacing.space_32} underLine color={EColors.primary}>{translate('AUTH.reSend')}</RNText>
      <RNButton
        isLoading={loading}
        title={translate('COMMON.continue')}
        disable={code?.length != CELL_COUNT}
        bgColor={code?.length != CELL_COUNT ? EColors.bgDisable : EColors.primary}
        onPress={onRestPassword}
      />
    </AuthTemplate>
  )
}

export default EnterCode

const styles = StyleSheet.create({
  container: {
    marginTop: ESPacing.space_32,
  },
  codeFiled: {
    width: ESPacing.space_50,
    height: ESPacing.space_50,
    fontSize: EFontSize.size_60,
    borderWidth: ESPacing.space_2,
    borderColor: EColors.border,
    fontWeight: EFontWeight.medium,
    borderRadius: ESPacing.space_6,
    lineHeight: ESPacing.space_40,
  },
  focusCell: {
    borderColor: EColors.primary
  }
})
