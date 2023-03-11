import React from 'react'

import { RNContainer, RNView } from 'components/core'
import Header from './Header'

interface IContainerPage {
  children?: React.ReactNode,
  navigation?: any,
  name?: string,
  isLoading?: boolean,
  color?: string,
  hasInput?: boolean
}

const ContainerPage = ({ navigation, name, isLoading, children, color, hasInput = false }: IContainerPage) => {
  return (
    <RNContainer isLoading={isLoading} color={color} hasInput={hasInput}>
      {/* <Header navigation={navigation} title={name} /> */}
      <RNView fill>
        {children}
      </RNView>
    </RNContainer>
  )
}

export default ContainerPage
