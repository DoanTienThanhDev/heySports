import { StyleSheet, Text } from 'react-native'
import React from 'react'

import { EColors, EFontSize, EFontWeight, ESPacing, ETextAlign } from 'themes'

interface IRNText {
  children?: React.ReactNode,
  size?: EFontSize,
  fill?: boolean,
  underLine?: boolean,
  color?: EColors | string,
  w?: ESPacing,
  h?: ESPacing,
  margin?: ESPacing,
  mTop?: ESPacing,
  mLeft?: ESPacing,
  mRight?: ESPacing,
  mBottom?: ESPacing,
  lines?: ESPacing,
  textAlign?: ETextAlign,
  fontWeight?: EFontWeight,
  onPress?: () => void,
  style?: any
}

const RNText = ({ children,
  size,
  fill,
  color,
  w,
  h,
  margin,
  mTop,
  mBottom,
  mLeft,
  mRight,
  underLine,
  lines,
  textAlign,
  style,
  fontWeight,
  onPress
}: IRNText) => {
  return (
    <Text style={[
      style && style,
      styles.container,
      fill && styles.fill,
      underLine && styles.underLine,
      color && { color: color },
      w && { width: w },
      h && { height: h },
      margin && { margin: margin },
      mTop && { marginTop: mTop },
      mBottom && { marginBottom: mBottom },
      mLeft && { marginLeft: mLeft },
      mRight && { marginRight: mRight },
      textAlign && { textAlign: textAlign },
      size && { fontSize: size },
      fontWeight && { fontWeight: fontWeight }
    ]}
      numberOfLines={lines}
      onPress={onPress}
    >
      {children}
    </Text>
  )
}

export default RNText

const styles = StyleSheet.create({
  container: {
    fontSize: EFontSize.primary,
    color: EColors.primaryText,
    fontWeight: EFontWeight.normal,
  },
  fill: {
    flex: ESPacing.space_1,
  },
  underLine: {
    textDecorationLine: 'underline'
  }
})