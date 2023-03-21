import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';

import { RNText, RNIcon } from 'components/core';

import { EColors, EFontSize, EFontWeight, ESPacing } from 'themes';
import { EIcons } from 'utils';

interface IRNButton {
  title: string,
  fill?: boolean,
  isLoading?: boolean,
  disable?: boolean,
  bgColor?: EColors,
  txtColor?: EColors,
  loadingColor?: EColors,
  w?: ESPacing,
  h?: ESPacing,
  margin?: ESPacing,
  mTop?: ESPacing,
  mLeft?: ESPacing,
  mRight?: ESPacing,
  mBottom?: ESPacing,
  pHoz?: ESPacing,
  mHoz?: ESPacing,
  mVer?: ESPacing,
  icon?: EIcons,
  onPress: () => void,
  style?: any
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
          <ActivityIndicator size={'small'} color={loadingColor || EColors.bgPage} /> :
          icon ?
            <RNIcon name={icon} size={EFontSize.size_24} /> :
            <RNText fontWeight={EFontWeight.bold} color={txtColor || EColors.bgPage} size={EFontSize.size_16}>{title}</RNText>
      }
    </TouchableOpacity>
  )
}

export default RNButton

const styles = StyleSheet.create({
  container: {
    marginTop: ESPacing.space_16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: EColors.primary,
    paddingHorizontal: ESPacing.space_24,
    height: ESPacing.space_50,
    borderRadius: ESPacing.space_8
  }
})