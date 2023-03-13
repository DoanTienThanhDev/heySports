import { Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface IRNPressable {
  style?: any,
  children?: React.ReactNode,
  color?: string,
  isBorder?: boolean,
  colorBorder?: string,
  borderRadius?: number,
  center?: boolean,
  mHoz?: number,
  mVer?: number,
  mTop?: number,
  mBottom?: number,
  mLeft?: number,
  mRight?: number,
  w?: number,
  h?: number,
  fill?: boolean,
  pVer?: number,
  pHoz?: number,
  borderColor?: string,
  hozCenter?: boolean,
  isRow?: boolean,
  onPress?: () => void
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
      isBorder && { borderWidth: 1, borderColor: borderColor || colorBorder, borderRadius: borderRadius },
      mHoz && { marginHorizontal: mHoz },
      mVer && { marginVertical: mVer },
      mTop && { marginTop: mTop },
      mBottom && { marginBottom: mBottom },
      mLeft && { marginLeft: mLeft },
      mRight && { marginRight: mRight },
      w && { width: w },
      h && { height: h },
      fill && { flex: 1 },
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
