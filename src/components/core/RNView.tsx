import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React from 'react'

import { COLORS, SCREENS } from 'values'
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
  isRow?: boolean
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
  ...more
}: IRNView) => {
  return (
    <>
      <View style={[
        isPage && styles.container,
        fill && styles.fill,
        center && styles.center,
        centerHoz && styles.centerHoz,
        centerVer && styles.centerVer,
        isRow && styles.row,
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
        !!mHoz && { marginHorizontal: pHoz },
        !!mVer && { marginVertical: pVer },
        !!borderRadius && { borderRadius: borderRadius, borderColor: borderColor || COLORS.border, borderWidth: borderWidth, },
        loading && { backgroundColor: bgLoading || COLORS.bgLoading, opacity: 0.8 },
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
  },
  row: {
    flexDirection: 'row'
  }
})