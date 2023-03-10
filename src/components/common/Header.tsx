import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { RNView, RNText, RNIcon } from 'components/core';
import { COLORS, FONTS } from 'themes';

interface IHeader {
  title?: string,
  id: string,
  icon?: string,
  typeIcon?: string,
  onPressRight?: () => void
}

const Header = ({ id, icon, typeIcon, title, onPressRight }: IHeader) => {
  const onPressBack = () => {
    Alert.alert(`${id}`)
  }
  return (
    <RNView h={FONTS.s32} mTop={!title ? 24 : 0} pLeft={!title ? 16 : 0} isRow centerHoz style={[title && styles.container]}>
      <Pressable style={styles.btnBack} hitSlop={10} onPress={onPressBack}>
        <RNIcon name="chevron-back" type='Ionicons' size={FONTS.s24} />
      </Pressable>
      {!!title && <RNText fill textAlign='center' fontWeight='600' lines={1} size={16}>{title}</RNText>}
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
    borderColor: COLORS.border,
    shadowColor: COLORS.primaryText,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnBack: {
    height: 30,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})