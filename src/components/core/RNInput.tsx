import { KeyboardTypeOptions, Pressable, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

import { RNIcon, RNText, RNView } from './index'

import { EColors, EFontSize, EFontWeight, ESPacing } from 'themes'
import { EIcons } from 'utils';

interface IRNInput {
  title: string,
  value?: string,
  errorMessage?: string,
  icon?: EIcons,
  placeholder?: string,
  w?: ESPacing,
  h?: ESPacing,
  margin?: ESPacing,
  mTop?: ESPacing,
  mLeft?: ESPacing,
  mRight?: ESPacing,
  mBottom?: ESPacing,
  lines?: ESPacing,
  isLeftIcon?: boolean,
  isRightIcon?: boolean,
  isTouch?: boolean,
  isPassword?: boolean,
  type?: KeyboardTypeOptions,
  onChangeText: (value: string) => void,
  onPressIcon?: () => void,
  style?: any
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
  lines,
  errorMessage,
  style,
  isLeftIcon,
  isRightIcon,
  isTouch,
  onChangeText,
  onPressIcon
}: IRNInput) => {
  const [isHideValue, setHideValue] = useState<boolean>(isPassword || false);
  const [isFocus, setFocus] = useState<boolean>(false);

  const onSetFocus = (state: boolean) => () => {
    setFocus(state)
  }

  return (
    < >
      <RNView
        borderRadius={ESPacing.space_6}
        borderWidth={ESPacing.space_border}
        borderColor={value || isFocus ? EColors.primary : EColors.border}
        h={h || ESPacing.space_height}
        w={w}
        mTop={mTop || ESPacing.space_16}
        mLeft={mLeft}
        mRight={mRight}
        mBottom={mBottom}
        margin={margin}
        pVer={ESPacing.space_4}
        pHoz={ESPacing.space_6}
        isRow
        centerHoz
        style={style}
      >
        {
          isLeftIcon && !!icon && <RNIcon name={icon} size={EFontSize.size_16} color={EColors.secondText} />
        }
        <RNView fill mLeft={isLeftIcon ? ESPacing.space_6 : 0}>
          {!!value && !!title &&
            <RNText size={14} fontWeight={EFontWeight.medium}>{`${title}`}</RNText>}
          <TextInput
            value={`${value}`}
            style={styles.container}
            keyboardType={type}
            secureTextEntry={isHideValue}
            placeholder={placeholder}
            onChangeText={onChangeText}
            onFocus={onSetFocus(true)}
            onBlur={onSetFocus(false)}
            autoCapitalize="none"
            numberOfLines={lines}
            placeholderTextColor={EColors.secondText}
          />
        </RNView>
        {(isPassword || isRightIcon) &&
          <Pressable style={styles.btnRight} onPress={() => { icon && onPressIcon ? onPressIcon() : setHideValue(!isHideValue) }}>
            <RNIcon name={icon ? icon : isHideValue ? EIcons.eye : EIcons.eyeSlash} size={EFontSize.size_18} />
          </Pressable>
        }
      </RNView>
      {
        !!errorMessage && isTouch && <RNText mTop={ESPacing.space_4} fontWeight={EFontWeight.normal} color={EColors.error} size={EFontSize.size_13}>
          {errorMessage}
        </RNText>
      }
    </>
  )
}

export default RNInput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: EFontSize.primary,
    fontWeight: EFontWeight.normal,
    paddingVertical: 0,
    color: EColors.primaryText
  },
  btnRight: {
    paddingHorizontal: ESPacing.space_5
  }
})