import { StyleSheet } from 'react-native'
import React from 'react'

import { ContainerPage } from 'components/common'
import { RNView } from 'components/core';

import { IPage } from 'screens/schemes';
import { COLORS } from 'themes';

interface IPitches extends IPage { }

const Pitch = ({ navigation }: IPitches) => {
  return (
    <ContainerPage name="Soccer fields" navigation={navigation} isBackIcon={false}>
      <RNView fill>

      </RNView>
    </ContainerPage>
  )
}

export default Pitch

const styles = StyleSheet.create({})