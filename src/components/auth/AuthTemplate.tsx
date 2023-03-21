import React from 'react'

import { RNImage, RNText, RNView } from '../core'

import { INavigation } from 'navigation/schemes';
import { ContainerPage } from 'components/common';
import { SCREEN_SIZE, EColors, EFontSize, EFontWeight, ESPacing } from 'themes';

interface IAuthTemplate extends INavigation {
  children?: React.ReactNode
  image: string,
  title: string,
  isBackIcon?: boolean
}

const AuthTemplate = ({ navigation, image, title, children, isBackIcon }: IAuthTemplate) => {
  return (
    <ContainerPage hasInput navigation={navigation} isBackIcon={isBackIcon} >
      <RNView fill center>
        <RNImage src={image} size={SCREEN_SIZE.width / ESPacing.space_2} />
      </RNView>
      <RNView flex={2} pHoz={24}>
        <RNText fontWeight={EFontWeight.bold} size={EFontSize.size_42} color={EColors.black}>{title}</RNText>
        {children}
      </RNView>
    </ContainerPage >
  )
}

export default AuthTemplate
