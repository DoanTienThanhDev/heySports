import { StyleSheet, View, ActivityIndicator, FlexStyle } from 'react-native'
import React from 'react'

import { EColors, ESPacing, SCREEN_SIZE } from 'themes'
interface IRNView {
  children?: React.ReactNode,
  color?: EColors,
  bgLoading?: EColors,
  borderColor?: EColors,
  w?: ESPacing,
  h?: ESPacing,
  margin?: ESPacing,
  mTop?: ESPacing,
  mLeft?: ESPacing,
  mRight?: ESPacing,
  mBottom?: ESPacing,
  padding?: ESPacing,
  pTop?: ESPacing,
  pLeft?: ESPacing,
  pRight?: ESPacing,
  pBottom?: ESPacing,
  pHoz?: ESPacing,
  pVer?: ESPacing,
  mHoz?: ESPacing,
  mVer?: ESPacing,
  borderTop?: ESPacing,
  flex?: ESPacing,
  borderRadius?: ESPacing,
  borderWidth?: ESPacing,
  loading?: boolean,
  center?: boolean,
  centerHoz?: boolean,
  centerVer?: boolean,
  isPage?: boolean,
  fill?: boolean,
  isRow?: boolean,
  hozContent?: FlexStyle['alignItems'],
  verContent?: FlexStyle['justifyContent'],
  style?: any
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
        color && { backgroundColor: color },
        w && { width: w },
        h && { height: h },
        margin && { margin: margin },
        mTop && { marginTop: mTop },
        mBottom && { marginBottom: mBottom },
        mLeft && { marginLeft: mLeft },
        mRight && { marginRight: mRight },
        padding && { padding: padding },
        pTop && { paddingTop: pTop },
        pBottom && { paddingBottom: pBottom },
        pLeft && { paddingLeft: pLeft },
        pRight && { paddingRight: pRight },
        pHoz && { paddingHorizontal: pHoz },
        pVer && { paddingVertical: pVer },
        mHoz && { marginHorizontal: mHoz },
        mVer && { marginVertical: mVer },
        borderRadius && { borderRadius: borderRadius, borderColor: borderColor || EColors.border, borderWidth: borderWidth },
        flex && { flex: flex },
        hozContent && { alignContent: verContent },
        verContent && { justifyContent: hozContent },
        isRow && { flexDirection: 'row' },
        loading && { backgroundColor: bgLoading || EColors.bgLoading, opacity: 0.8 },
        borderTop && { borderTopLeftRadius: borderTop, borderTopRightRadius: borderTop, borderColor: borderColor || EColors.border, borderWidth: borderWidth || ESPacing.space_border },
        { ...more }
      ]
      }>
        {children}
      </View >
      {
        loading && <View style={[styles.containerLoading]}>
          <View style={styles.displayLoading}>
            <ActivityIndicator color={EColors.primary} size="large" />
          </View>
        </View>
      }
    </>
  )
}

export default RNView

const styles = StyleSheet.create({
  container: {
    backgroundColor: EColors.bgPage
  },
  fill: {
    flex: ESPacing.space_1,
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
    left: ESPacing.space_0,
    top: ESPacing.space_0,
    right: ESPacing.space_0,
    bottom: ESPacing.space_0
  },
  displayLoading: {
    backgroundColor: EColors.bgPage,
    width: (SCREEN_SIZE.width - ESPacing.space_50) / ESPacing.space_3,
    height: (SCREEN_SIZE.width - ESPacing.space_50) / ESPacing.space_3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ESPacing.space_8,
    borderColor: EColors.primary,
    borderWidth: 0.2
  }
})