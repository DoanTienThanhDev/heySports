import React from 'react'
import { SafeAreaView, StyleSheet, Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { RNPressable, RNView } from 'components/core';
import { EColors, SCREEN_SIZE } from 'themes'
interface IRNContainer {
  children: React.ReactNode,
  color?: EColors,
  isLoading?: boolean,
  hasInput?: boolean
}

const RNContainer = ({ children, color, isLoading, hasInput }: IRNContainer) => {
  if (hasInput) {
    return (
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'always'}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        style={styles.container}
      >
        <SafeAreaView style={[styles.container, !isLoading && { backgroundColor: color || EColors.bgPage }]}>
          <RNPressable fill onPress={Keyboard.dismiss}>
            {children}
          </RNPressable>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    )
  }

  return (
    <RNView loading={isLoading} fill isPage>
      <SafeAreaView style={[styles.container, !isLoading && { backgroundColor: color || EColors.bgPage }]}>
        {children}
      </SafeAreaView>
    </RNView>
  )
}

export default RNContainer

const styles = StyleSheet.create({
  container: {
    width: SCREEN_SIZE.width,
    height: SCREEN_SIZE.height,
    backgroundColor: EColors.bgPage
  }
})
