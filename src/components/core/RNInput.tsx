import { KeyboardTypeOptions, Pressable, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

import { RNIcon, RNText, RNView } from './index'
import { COLORS, FONTS } from 'themes'

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
  lines?: number,
  errorMessage?: string,
  style?: any,
  isLeftIcon?: boolean,
  isRightIcon?: boolean,
  isTouch?: boolean,
  onChangeText: (value: string) => void,
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
        style={style}
      >
        {
          isLeftIcon && !!icon && <RNIcon name={icon} size={FONTS.s16} color={COLORS.secondText} />
        }
        <RNView fill mLeft={isLeftIcon ? FONTS.s6 : 0}>
          {!!value && !!title &&
            <RNText size={14} color={COLORS.primaryText} fontWeight="600">{`${title}`}</RNText>}
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
            placeholderTextColor={COLORS.secondText}
          />
        </RNView>
        {(isPassword || isRightIcon) &&
          <Pressable style={styles.btnRight} onPress={() => { icon && onPressIcon ? onPressIcon() : setHideValue(!isHideValue) }}>
            <RNIcon name={icon ? icon : isHideValue ? 'eye' : 'eye-slash'} size={18} />
          </Pressable>
        }
      </RNView>
      {
        !!errorMessage && isTouch && <RNText mTop={4} fontWeight='400' color={COLORS.error} size={FONTS.s13}>
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
    fontSize: FONTS.s14,
    fontWeight: "400",
    paddingVertical: 0,
  },
  btnRight: {
    paddingHorizontal: 5
  }
})