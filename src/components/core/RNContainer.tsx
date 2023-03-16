import React from 'react'
import { SafeAreaView, StyleSheet, Keyboard, Platform } from 'react-native'

import { RNPressable, RNView } from 'components/core';
import { COLORS, SCREENS } from 'themes'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
interface IRNContainer {
  children: React.ReactNode,
  color?: string,
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
        <SafeAreaView style={[styles.container, !isLoading && { backgroundColor: color || COLORS.bgPage }]}>
          <RNPressable fill onPress={Keyboard.dismiss}>
            {children}
          </RNPressable>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    )
  }

  return (
    <RNView loading={isLoading} fill isPage>
      <SafeAreaView style={[styles.container, !isLoading && { backgroundColor: color || COLORS.bgPage }]}>
        {children}
      </SafeAreaView>
    </RNView>
  )
}

export default RNContainer

const styles = StyleSheet.create({
  container: {
    width: SCREENS.width,
    height: SCREENS.height,
    backgroundColor: COLORS.bgPage
  }
})
