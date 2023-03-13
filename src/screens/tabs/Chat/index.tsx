import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { ContainerPage } from 'components/common'
import { RNView } from 'components/core'
import { IPage } from 'screens/schemes';

interface IConversations extends IPage { }

const Conversations = ({ navigation }: IConversations) => {
  return (
    <ContainerPage name="Conversations" navigation={navigation} isBackIcon={false}>
      <RNView fill>

      </RNView>
    </ContainerPage>
  )
}

export default Conversations

const styles = StyleSheet.create({})