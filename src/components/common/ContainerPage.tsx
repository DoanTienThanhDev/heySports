import React from 'react'

import { RNContainer, RNView } from 'components/core'
import Header from './Header'
import { COLORS } from '../../themes'

interface IContainerPage {
  children: React.ReactNode,
  id: string,
  name?: string,
  isLoading?: boolean,
  color?: string,
}

const ContainerPage = ({ id, name, isLoading, children, color }: IContainerPage) => {
  return (
    <RNContainer color={isLoading ? COLORS.bgLoading : color || COLORS.bgPage}>
      <Header id={id} title={name} />
      <RNView fill>
        {children}
      </RNView>
    </RNContainer>
  )
}

export default ContainerPage
