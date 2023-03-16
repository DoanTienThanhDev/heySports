import { StyleSheet, View, ActivityIndicator, FlexStyle } from 'react-native'
import React from 'react'

import { COLORS, SCREENS } from 'themes'
interface IRNView {
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
  padding?: number,
  pTop?: number,
  pLeft?: number,
  pRight?: number,
  pBottom?: number,
  loading?: boolean,
  bgLoading?: string,
  center?: boolean,
  centerHoz?: boolean,
  centerVer?: boolean,
  pHoz?: number,
  pVer?: number,
  mHoz?: number,
  mVer?: number,
  isPage?: boolean,
  borderRadius?: number,
  borderColor?: string,
  borderWidth?: number,
  isRow?: boolean,
  style?: any,
  flex?: number,
  hozContent?: FlexStyle['alignItems'],
  verContent?: FlexStyle['justifyContent'],
  borderTop?: number,
}

const RNView = ({
  children,
  fill,
  color,
  w,
  h,
  margin,
  mTop,
  mBottom,
  mLeft,
  mRight,
  padding,
  pTop,
  pLeft,
  pBottom,
  pRight,
  pHoz,
  loading,
  bgLoading,
  center,
  centerHoz,
  centerVer,
  pVer,
  mHoz,
  mVer,
  isPage,
  borderRadius,
  borderColor,
  borderWidth,
  isRow,
  style,
  flex,
  verContent,
  hozContent,
  borderTop,
  ...more
}: IRNView) => {
  return (
    <>
      <View style={[
        style && style,
        isPage && styles.container,
        fill && styles.fill,
        center && styles.center,
        centerHoz && styles.centerHoz,
        centerVer && styles.centerVer,
        !!color && { backgroundColor: color },
        !!w && { width: w },
        !!h && { height: h },
        !!margin && { margin: margin },
        !!mTop && { marginTop: mTop },
        !!mBottom && { marginBottom: mBottom },
        !!mLeft && { marginLeft: mLeft },
        !!mRight && { marginRight: mRight },
        !!padding && { padding: padding },
        !!pTop && { paddingTop: pTop },
        !!pBottom && { paddingBottom: pBottom },
        !!pLeft && { paddingLeft: pLeft },
        !!pRight && { paddingRight: pRight },
        !!pHoz && { paddingHorizontal: pHoz },
        !!pVer && { paddingVertical: pVer },
        !!mHoz && { marginHorizontal: mHoz },
        !!mVer && { marginVertical: mVer },
        !!borderRadius && { borderRadius: borderRadius, borderColor: borderColor || COLORS.border, borderWidth: borderWidth },
        flex && { flex: flex },
        hozContent && { alignContent: verContent },
        verContent && { justifyContent: hozContent },
        isRow && { flexDirection: 'row' },
        loading && { backgroundColor: bgLoading || COLORS.bgLoading, opacity: 0.8 },
        borderTop && { borderTopLeftRadius: borderTop, borderTopRightRadius: borderTop, borderColor: borderColor || COLORS.border, borderWidth: borderWidth || 1 },
        { ...more }
      ]
      }>
        {children}
      </View >
      {
        loading && <View style={[styles.containerLoading]}>
          <View style={styles.displayLoading}>
            <ActivityIndicator color={COLORS.primary} size="large" />
          </View>
        </View>
      }
    </>
  )
}

export default RNView

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bgPage
  },
  fill: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerHoz: {
    alignItems: 'center',
  },
  centerVer: {
    justifyContent: 'center'
  },
  containerLoading: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  displayLoading: {
    backgroundColor: COLORS.bgPage,
    width: (SCREENS.width - 50) / 3,
    height: (SCREENS.width - 50) / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: COLORS.primary,
    borderWidth: 0.2
  }
})