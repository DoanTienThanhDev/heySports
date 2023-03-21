import React from 'react'

import { RNContainer, RNView } from 'components/core'
import Header from './Header'

import { INavigation } from 'navigation/schemes'
import { EColors } from 'themes';

interface IContainerPage extends INavigation {
  children?: React.ReactNode,
  name?: string,
  isLoading?: boolean,
  color?: EColors,
  hasInput?: boolean,
  isBackIcon?: boolean,
  onPressBack?: () => void
}

const ContainerPage = ({ navigation, name, isLoading, children, color, hasInput = false, isBackIcon = true, onPressBack }: IContainerPage) => {
  return (
    <RNContainer isLoading={isLoading} color={color} hasInput={hasInput}>
      {isBackIcon && <Header navigation={navigation} title={name} isBackIcon={isBackIcon} onPressBack={onPressBack} />}
      <RNView fill>
        {children}
      </RNView>
    </RNContainer>
  )
}

export default ContainerPage
