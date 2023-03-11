import React from 'react'
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'

import { COLORS } from 'themes'
import RNPressable from './RNPressable'
import RNView from './RNView'

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