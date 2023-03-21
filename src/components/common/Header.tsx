import { Platform, Pressable, StyleSheet } from 'react-native'
import React from 'react'

import { RNView, RNText, RNIcon } from 'components/core';

import { popScreen } from 'navigation';
import { INavigation } from 'navigation/schemes';
import { EFontSize, EFontWeight, ESPacing, ETextAlign, EColors } from 'themes';
import { EIcons, EIconTypes } from 'utils';

interface IHeader extends INavigation {
  title?: string,
  icon?: EIcons,
  typeIcon?: EIconTypes,
  isBackIcon?: boolean,
  onPressRight?: () => void,
  onPressBack?: () => void
}

const Header = ({ navigation, icon, typeIcon, title, isBackIcon, onPressRight, onPressBack }: IHeader) => {
  const onPress = () => {
    if (isBackIcon) {
      onPressBack ? onPressBack() : popScreen({ navigation })
    }
  }

  return (
    <RNView
      h={Platform.OS === "ios" ? ESPacing.space_32 : ESPacing.space_54}
      mTop={!title ? ESPacing.space_24 : ESPacing.space_0}
      pLeft={!title ? ESPacing.space_16 : ESPacing.space_0}
      isRow
      centerHoz
      style={[title && styles.container]}>
      <Pressable style={styles.btnBack} hitSlop={ESPacing.space_10} onPress={onPress}>
        {isBackIcon && <RNIcon name={EIcons.ic_back} type={EIconTypes.ionIcon} size={EFontSize.size_24} />}
      </Pressable>
      {!!title &&
        <RNText fill textAlign={ETextAlign.center} fontWeight={EFontWeight.medium} lines={ESPacing.space_1} size={Platform.OS === "ios" ? EFontSize.size_20 : EFontSize.size_18}>
          {title}
        </RNText>}
      <Pressable style={styles.btnBack} hitSlop={ESPacing.space_10} onPress={onPressRight}>
        {!!icon && <RNIcon name={icon} type={typeIcon} />}
      </Pressable>
    </RNView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: ESPacing.space_border,
    borderBottomColor: EColors.border
  },
  btnBack: {
    height: ESPacing.space_32,
    width: ESPacing.space_40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})