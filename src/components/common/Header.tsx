import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface IHeader {
  componentId: string
}

const Header = ({ componentId }: IHeader) => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})