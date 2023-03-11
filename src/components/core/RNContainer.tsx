import React from 'react'
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'

import { RNPressable, RNView } from 'components/core';
import { COLORS } from 'themes'
interface IRNContainer {
  children: React.ReactNode,
  color?: string,
  isLoading?: boolean,
  hasInput?: boolean
}

const RNContainer = ({ children, color, isLoading, hasInput }: IRNContainer) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })

  return (
    <RNView loading={isLoading} fill>
      <SafeAreaView style={[styles.container, !isLoading && { backgroundColor: color || COLORS.bgPage }]}>
        {hasInput ?
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <RNPressable onPress={Keyboard.dismiss} fill>
              {children}
            </RNPressable>
          </KeyboardAvoidingView>
          : children}
      </SafeAreaView>
    </RNView>
  )
}

export default RNContainer