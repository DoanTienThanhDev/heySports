import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { ContainerPage } from 'components/common'
import { RNView } from 'components/core'

import { IPage } from 'screens/schemes';

interface IBooking extends IPage { }

const Booking = ({ navigation }: IBooking) => {
  return (
    <ContainerPage name="Booking" navigation={navigation} isBackIcon={false}>
      <RNView fill>

      </RNView>
    </ContainerPage>

  )
}

export default Booking

const styles = StyleSheet.create({})