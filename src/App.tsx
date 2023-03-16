import React, { useEffect, useState, useCallback } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Welcome, Login, Register, ForgotPassword, Logout } from 'screens'
import BottomTabs from 'navigation/mainTabs';
import { useGetLocalStore } from './hooks'
import { CONSTANTS } from 'utils';

const Stack = createNativeStackNavigator();

const SCREENS = {
  Welcome,
  Register,
  ForgotPassword,
  Logout,
  Login
}

const renderListChild = () => {
  return <>
    {
      Object.keys(SCREENS).map((item) => <Stack.Screen key={item} name={item} component={SCREENS[item]} />)
    }
  </>
}

const AppStackScreen = () => {
  const [initRouteName, setInitRouteName] = useState<string>('')

  useEffect(() => {
    getInitName()
  }, [])

  const getInitName = useCallback(async () => {
    let isSkipWelcome = await useGetLocalStore(CONSTANTS.LOCAL_STORE_KEY.WELCOME)
    if (isSkipWelcome) {
      let isLogin = await useGetLocalStore(CONSTANTS.LOCAL_STORE_KEY.ACCESS_TOKEN)
      setInitRouteName(isLogin ? 'Main' : 'Login')
    } else {
      setInitRouteName('Welcome')
    }
  }, [])

  if (initRouteName === '') {
    return null
  }

  return (
    <Stack.Navigator
      initialRouteName={initRouteName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Main'
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      {renderListChild()}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppStackScreen />
    </NavigationContainer>
  );
};

export default App
