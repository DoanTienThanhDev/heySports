import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { RNContainer, RNText, RNView } from 'components/core'
import { ContainerPage } from 'components/common'

import { COLORS } from 'themes'
import { IPage } from 'screens/schemes'

interface ISettings extends IPage { }

const Settings = ({ navigation }: ISettings) => {
  return (
    <ContainerPage navigation={navigation} name={"Settings"} isBackIcon={false}>
      <RNView />
      <RNText />
      <RNText />
    </ContainerPage>
  )
}

export default Settings

const styles = StyleSheet.create({})