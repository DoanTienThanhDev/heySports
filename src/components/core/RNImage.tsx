import { ActivityIndicator, Image, StyleSheet } from 'react-native'
import React from 'react'

import RNView from './RNView'
import { EColors, ESPacing, EFontSize } from 'themes';

interface IRNImage {
  isAvatar?: boolean,
  src: string | number,
  w?: ESPacing,
  h?: ESPacing,
  size?: EFontSize,
  isLoading?: boolean
}

const RNImage = ({ w, h, src, size, isAvatar, isLoading }: IRNImage) => {
  let imageSite: number = size || 0
  const styles = StyleSheet.create({
    image: {
      borderWidth: ESPacing.space_2,
      borderColor: EColors.primary,
      borderRadius: imageSite / ESPacing.space_2,
      width: imageSite - ESPacing.space_4,
      height: imageSite - ESPacing.space_4
    },
    loading: {
      color: EColors.primary,
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
      <RNView center w={size} h={size} borderRadius={imageSite} borderWidth={2} borderColor={EColors.primary}>
        {isLoading ? <ActivityIndicator size={imageSite > ESPacing.space_100 ? 'large' : 'small'} color={EColors.primary} /> : <Image source={getSource()} style={styles.image} />}
      </RNView>
    )
  }

  return (
    <RNView w={size || w} h={size || h} borderRadius={ESPacing.space_radius} center borderColor={isLoading ? EColors.border : EColors.bgPage} borderWidth={ESPacing.space_border} >
      {isLoading ? <ActivityIndicator size={'small'} color={EColors.primary} /> : <Image source={getSource()} style={[{ width: size || w, height: size || h, borderRadius: ESPacing.space_radius }]} resizeMode='stretch' />}
    </RNView>
  )
}

export default RNImage
