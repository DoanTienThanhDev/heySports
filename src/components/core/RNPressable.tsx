import { Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface IRNPressable {
  style?: any,
  children?: React.ReactNode,
  color?: string,
  isBorder?: boolean,
  colorBorder?: string,
  borderRadius?: string,
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
  onPress
}: IRNPressable) => {
  return (
    <Pressable style={[
      style && style,
      center && styles.center,
      color && { backgroundColor: color },
      isBorder && { borderWidth: 1, borderColor: colorBorder, borderRadius: borderRadius },
      mHoz && { marginHorizontal: mHoz },
      mVer && { marginVertical: mVer },
      mTop && { marginTop: mTop },
      mBottom && { marginBottom: mBottom },
      mLeft && { marginLeft: mLeft },
      mRight && { marginRight: mRight },
      w && { width: w },
      h && { height: h },
      fill && { flex: 1 },
      pVer && { paddingVertical: pVer }
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
  }
})
