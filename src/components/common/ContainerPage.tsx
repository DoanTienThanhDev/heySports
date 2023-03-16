import React from 'react'

import { RNContainer, RNView } from 'components/core'
import Header from './Header'

import { INavigation } from 'navigation/schemes'

interface IContainerPage extends INavigation {
  children?: React.ReactNode,
  name?: string,
  isLoading?: boolean,
  color?: string,
  hasInput?: boolean,
  isBackIcon?: boolean,
  onPressBack?: () => void
}

const ContainerPage = ({ navigation, name, isLoading, children, color, hasInput = false, isBackIcon, onPressBack }: IContainerPage) => {
  const onPressBackFromPage = () => {
    onPressBack && onPressBack()
  }
  return (
    <RNContainer isLoading={isLoading} color={color} hasInput={hasInput}>
      <Header navigation={navigation} title={name} isBackIcon={isBackIcon} onPressBack={onPressBackFromPage} />
      <RNView fill>
        {children}
      </RNView>
    </RNContainer>
  )
}

export default ContainerPage
