import { Pressable, StyleSheet } from 'react-native'
import React from 'react'

import { EColors, ESPacing } from 'themes';

interface IRNPressable {
  children?: React.ReactNode,
  color?: EColors,
  borderColor?: EColors,
  colorBorder?: EColors,
  borderRadius?: ESPacing,
  mHoz?: ESPacing,
  mVer?: ESPacing,
  mTop?: ESPacing,
  mBottom?: ESPacing,
  mLeft?: ESPacing,
  mRight?: ESPacing,
  w?: ESPacing,
  h?: ESPacing,
  fill?: boolean,
  pVer?: ESPacing,
  pHoz?: ESPacing,
  hozCenter?: boolean,
  isRow?: boolean,
  isBorder?: boolean,
  center?: boolean,
  onPress?: () => void,
  style?: any
}

const RNPressable = ({
  children,
  style,
  color,
  isBorder,
  borderRadius,
  colorBorder,
  center,
  mHoz,
  mVer,
  w,
  h,
  mTop,
  mBottom,
  mRight,
  mLeft,
  fill,
  pVer,
  pHoz,
  borderColor,
  hozCenter,
  isRow,
  onPress
}: IRNPressable) => {
  return (
    <Pressable style={[
      style && style,
      center && styles.center,
      isRow && styles.row,
      color && { backgroundColor: color },
      isBorder && { borderWidth: ESPacing.space_border, borderColor: borderColor || colorBorder, borderRadius: borderRadius },
      mHoz && { marginHorizontal: mHoz },
      mVer && { marginVertical: mVer },
      mTop && { marginTop: mTop },
      mBottom && { marginBottom: mBottom },
      mLeft && { marginLeft: mLeft },
      mRight && { marginRight: mRight },
      w && { width: w },
      h && { height: h },
      fill && { flex: ESPacing.space_1 },
      pVer && { paddingVertical: pVer },
      pHoz && { paddingHorizontal: pHoz },
      hozCenter && { alignItems: 'center' }
    ]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  )
}

export default RNPressable

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row'
  }
})
