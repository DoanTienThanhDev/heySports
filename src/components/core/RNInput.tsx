import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

import { RNButton, RNText, RNView } from './index'

import { COLORS, FONTS } from '../../values'

interface IRNInput {
  title: string,
  value?: string,
  type?: KeyboardTypeOptions,
  isPassword?: boolean,
  icon?: string,
  placeholder?: string,
  w?: number,
  h?: number,
  margin?: number,
  mTop?: number,
  mLeft?: number,
  mRight?: number,
  mBottom?: number,
  onChangeValue: (value: string) => void,
  onPressIcon?: () => void
}

const RNInput = ({
  value,
  type,
  title,
  isPassword,
  icon,
  placeholder,
  w,
  h,
  margin,
  mTop,
  mBottom,
  mLeft,
  mRight,
  onChangeValue,
  onPressIcon
}: IRNInput) => {
  const [isHideValue, setHideValue] = useState<boolean>(isPassword || false);
  const [isFocus, setFocus] = useState<boolean>(false);

  return (
    <RNView
      borderRadius={FONTS.primaryRadius}
      borderWidth={FONTS.borderWidth}
      borderColor={value || isFocus ? COLORS.primary : COLORS.border}
      h={h || FONTS.height}
      w={w}
      mTop={mTop || FONTS.s16}
      mLeft={mLeft}
      mRight={mRight}
      mBottom={mBottom}
      margin={margin}
      pVer={FONTS.s4}
      pHoz={FONTS.s6}
      isRow
      centerHoz
    >
      <RNView fill>
        {!!value && !!title &&
          <RNText size={14} color={COLORS.primaryText} fontWeight="600">{title}</RNText>}
        <TextInput
          value={value}
          style={[styles.container, { backgroundColor: COLORS.border, flex: 1, }]}
          keyboardType={type}
          secureTextEntry={isHideValue}
          placeholder={placeholder}
          onChangeText={onChangeValue}
          onFocus={() => { setFocus(true) }}
          onBlur={() => { setFocus(false) }}
        />
      </RNView>
      {isPassword || !!icon && <RNButton
        onPress={() => { icon && onPressIcon ? onPressIcon() : setHideValue(!isHideValue) }}
        title=""
        bgColor={COLORS.bgLoading}
        icon={"hide"}
        pHoz={12} />}
    </RNView>
  )
}

export default RNInput

const styles = StyleSheet.create({
  container: {
    fontSize: FONTS.s14,
    fontWeight: "400"
  }
})