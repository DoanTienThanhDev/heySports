import { StyleSheet, View } from 'react-native'
import React from 'react'

import { COLORS } from 'values'

interface IRNView {
  children?: React.ReactNode,
  fill?: boolean,
  color?: string,
  w?: number,
  h?: number
}

const RNView = ({ children, fill, color, w, h }: IRNView) => {
  return (
    <View style={[styles.container, fill && styles.fill, !!color && { backgroundColor: color }, !!w && { width: w }, !!h && { height: h }]
    }>
      {children}
    </View >
  )
}

export default RNView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.bgPage
  },
  fill: {
    flex: 1,
  }
})