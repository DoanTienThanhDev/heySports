import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'

import { RNText, RNIcon } from 'components/core';
import { COLORS, FONTS } from 'themes'

interface IRNButton {
  title: string,
  style?: any,
  fill?: boolean,
  bgColor?: string,
  txtColor?: string,
  isLoading?: boolean,
  loadingColor?: string,
  disable?: boolean,
  w?: number,
  h?: number,
  margin?: number,
  mTop?: number,
  mLeft?: number,
  mRight?: number,
  mBottom?: number,
  pHoz?: number,
  icon?: string,
  mHoz?: number,
  mVer?: number,
  onPress: () => void
}

const RNButton = ({
  title,
  style,
  fill,
  bgColor,
  txtColor,
  isLoading,
  loadingColor,
  disable,
  w,
  h,
  margin,
  mTop,
  mBottom,
  mLeft,
  mRight,
  icon,
  pHoz,
  mHoz,
  mVer,
  onPress,
  ...more
}: IRNButton) => {
  return (
    <TouchableOpacity style={[
      style && style,
      styles.container,
      fill && { flex: 1, height: 50 },
      bgColor && { backgroundColor: bgColor },
      w && { width: w },
      h && { height: h },
      margin && { margin: margin },
      mTop && { marginTop: mTop },
      mBottom && { marginBottom: mBottom },
      mLeft && { marginLeft: mLeft },
      mRight && { marginRight: mRight },
      pHoz && { paddingHorizontal: pHoz },
      mHoz && { marginHorizontal: mHoz },
      mVer && { marginVertical: mVer },
      { ...more }
    ]}
      disabled={disable || isLoading}
      onPress={onPress}
    >
      {
        isLoading ?
          <ActivityIndicator size={'small'} color={loadingColor || COLORS.bgPage} /> :
          icon ?
            <RNIcon name={icon} size={FONTS.s24} /> :
            <RNText fontWeight='bold' color={txtColor || COLORS.bgPage} size={FONTS.s16}>{title}</RNText>
      }
    </TouchableOpacity>
  )
}

export default RNButton

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: FONTS.s24,
    height: 50,
    borderRadius: FONTS.s8
  }
})