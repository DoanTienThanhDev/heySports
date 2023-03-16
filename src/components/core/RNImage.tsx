import { ActivityIndicator, Image, StyleSheet } from 'react-native'
import React from 'react'

import RNView from './RNView'
import { COLORS } from 'themes';

interface IRNImage {
  isAvatar?: boolean,
  src: string | number,
  w?: number,
  h?: number,
  size?: number,
  isLoading?: boolean
}

const RNImage = ({ w, h, src, size, isAvatar, isLoading }: IRNImage) => {
  let imageSite: number = size || 0
  const styles = StyleSheet.create({
    image: {
      borderWidth: 2,
      borderColor: COLORS.primary,
      borderRadius: imageSite / 2,
      width: imageSite - 4,
      height: imageSite - 4
    },
    loading: {
      color: COLORS.primary,
    }
  })

  const getSource = () => {
    if (`${src}`.startsWith('https')) {
      return { uri: src }
    }
    return src
  }

  if (isAvatar) {
    return (
      <RNView center w={size} h={size} borderRadius={imageSite} borderWidth={2} borderColor={COLORS.primary}>
        {isLoading ? <ActivityIndicator size={imageSite > 100 ? 'large' : 'small'} color={COLORS.primary} /> : <Image source={getSource()} style={styles.image} />}
      </RNView>
    )
  }

  return (
    <RNView w={size || w} h={size || h} borderRadius={6} center borderColor={isLoading ? COLORS.border : COLORS.bgPage} borderWidth={1} >
      {isLoading ? <ActivityIndicator size={'small'} color={COLORS.primary} /> : <Image source={getSource()} style={[{ width: size || w, height: size || h, borderRadius: 6 }]} resizeMode='stretch' />}
    </RNView>
  )
}

export default RNImage
