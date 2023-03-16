import { StyleSheet, Text } from 'react-native'
import React from 'react'

import { COLORS, FONTS } from 'themes'

interface IRNText {
  size?: number,
  style?: any,
  children?: React.ReactNode,
  fill?: boolean,
  color?: string,
  w?: number,
  h?: number,
  margin?: number,
  mTop?: number,
  mLeft?: number,
  mRight?: number,
  mBottom?: number,
  underLine?: boolean,
  lines?: number,
  textAlign?: 'auto' | 'center' | 'justify' | 'left' | 'right',
  fontWeight?: '200' | '400' | '600' | '900' | 'normal' | 'bold',
  onPress?: () => void
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
    fontSize: FONTS.s14,
    color: COLORS.primaryText,
    fontWeight: "normal"
  },
  fill: {
    flex: 1,
  },
  underLine: {
    textDecorationLine: 'underline'
  }
})