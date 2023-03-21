import { StyleSheet } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'

import { RNButton, RNContainer, RNImage, RNText, RNView } from 'components/core'
import { ContainerPage } from 'components/common'

import { COLORS, IMAGES } from 'themes'
import { IPage } from 'screens/schemes'
import { useGetLocalStore, useRemoveLocalStore } from 'hooks'
import { CONSTANTS } from 'utils';
import { pushToLogin } from 'navigation'

interface ISettings extends IPage { }

const Settings = ({ navigation }: ISettings) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<IUserLogin>()

  useEffect(() => {
    onGetUserInfo()
  }, [])

  const onGetUserInfo = useCallback(async () => {
    let userInfo = await useGetLocalStore<IUserLogin>(CONSTANTS.LOCAL_STORE_KEY.accessToken)
    if (userInfo) {
      setUser(userInfo)
    }
  }, [])
  const onLogout = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      useRemoveLocalStore(CONSTANTS.LOCAL_STORE_KEY.welcome)
      useRemoveLocalStore(CONSTANTS.LOCAL_STORE_KEY.accessToken)
      pushToLogin({ navigation })
    }, 1000);

  }
  return (
    <RNView fill color={COLORS.primary}>
      <RNView fill />
      <RNView flex={8} color={COLORS.bgPage} borderTop={50}>
        <RNButton title={'Logout'} onPress={onLogout} isLoading={loading} />
      </RNView>
    </RNView >
  )
}

export default Settings

const styles = StyleSheet.create({})