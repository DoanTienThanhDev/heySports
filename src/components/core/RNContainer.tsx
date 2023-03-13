import React from 'react'
import { SafeAreaView, StyleSheet, Keyboard } from 'react-native'

import { RNPressable, RNView } from 'components/core';
import { COLORS } from 'themes'
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
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <RNPressable fill onPress={Keyboard.dismiss}>
          <RNView loading={isLoading} fill>
            <SafeAreaView style={[styles.container, !isLoading && { backgroundColor: color || COLORS.bgPage }]}>
              {children}
            </SafeAreaView>
          </RNView>
        </RNPressable>
      </KeyboardAwareScrollView>
    )
  }

  return (
    <RNView loading={isLoading} fill>
      <SafeAreaView style={[styles.container, !isLoading && { backgroundColor: color || COLORS.bgPage }]}>
        {children}
      </SafeAreaView>
    </RNView>
  )
}

export default RNContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
