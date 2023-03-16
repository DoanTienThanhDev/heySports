import { Platform, Pressable, StyleSheet } from 'react-native'
import React from 'react'

import { RNView, RNText, RNIcon } from 'components/core';

import { popScreen } from 'navigation';
import { INavigation } from 'navigation/schemes';
import { COLORS, FONTS } from 'themes';

interface IHeader extends INavigation {
  title?: string,
  icon?: string,
  typeIcon?: string,
  isBackIcon?: boolean,
  onPressRight?: () => void,
  onPressBack?: () => void
}

const Header = ({ navigation, icon, typeIcon, title, isBackIcon = true, onPressRight, onPressBack }: IHeader) => {
  const onPress = () => {
    if (isBackIcon) {
      onPressBack ? onPressBack() : popScreen({ navigation })
    }
  }

  return (
    <RNView
      h={Platform.OS === "ios" ? FONTS.s32 : FONTS.height}
      mTop={!title ? 24 : 0}
      pLeft={!title ? 16 : 0}
      isRow
      centerHoz
      style={[title && styles.container]}>
      <Pressable style={styles.btnBack} hitSlop={10} onPress={onPress}>
        {isBackIcon && <RNIcon name="chevron-back" type='Ionicons' size={FONTS.s24} />}
      </Pressable>
      {!!title &&
        <RNText fill textAlign='center' fontWeight='600' lines={1} size={Platform.OS === "ios" ? FONTS.s20 : FONTS.s18}>
          {title}
        </RNText>}
      <Pressable style={styles.btnBack} hitSlop={10} onPress={onPressRight}>
        {!!icon && <RNIcon name={icon} type={typeIcon} />}
      </Pressable>
    </RNView>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border
  },
  btnBack: {
    height: 30,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})