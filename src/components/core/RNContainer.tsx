import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

import { COLORS } from 'themes'

interface IRNContainer {
  children: React.ReactNode,
  color?: string
}

const RNContainer = ({ children, color }: IRNContainer) => {
  return (
    <SafeAreaView style={[styles.container, !!color && { backgroundColor: color }]}>
      {children}
    </SafeAreaView>
  )
}

export default RNContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgPage
  }
})