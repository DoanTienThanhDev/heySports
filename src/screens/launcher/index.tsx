import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

import { RNContainer, RNInput } from 'components/core';

import { COLORS } from 'themes';


const Launcher = () => {
  const [state, setState] = useState(false)

  useEffect(() => {
    if (state) {
      Alert.alert('Done')
    }
  }, [state])

  const onPressBtn = () => {
    setState(!state)
  }
  return (
    <View style={styles.container} >
      <RNInput onChangeValue={onPressBtn} />
    </ View>
  )
}

export default Launcher

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})