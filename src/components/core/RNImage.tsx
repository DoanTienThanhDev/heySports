import { StyleSheet, Text, View, Image, ImageSourcePropType, ImageProps } from 'react-native'
import React from 'react'

interface IRNImage {
  src: string | number,
  w?: number,
  h?: number,
  size?: number,
}

const RNImage = ({ w, h, src, size }: IRNImage) => {

  const getSource = () => {
    if (`${src}`.startsWith('https')) {
      return { uri: src }
    }
    return src
  }

  return (
    <Image source={getSource()} style={[{ width: size || w, height: size || h }]} resizeMethod="auto" resizeMode="contain" />
  )
}

export default RNImage

const styles = StyleSheet.create({})