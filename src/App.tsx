import React, { useEffect, useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabs from 'navigation/mainTabs';

import { Welcome, Login, Register, ForgotPassword, Logout, Password } from 'screens';

import { useGetLocalStore } from './hooks'
import { CONSTANTS, SCREENS_NAME } from 'utils';

const Stack = createNativeStackNavigator();

const SCREENS = {
  Welcome,
  Register,
  ForgotPassword,
  Logout,
  Login,
  Password
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
    let isSkipWelcome = await useGetLocalStore(CONSTANTS.LOCAL_STORE_KEY.welcome)
    if (isSkipWelcome) {
      let isLogin = await useGetLocalStore(CONSTANTS.LOCAL_STORE_KEY.accessToken)
      setInitRouteName(isLogin ? SCREENS_NAME.main : SCREENS_NAME.login)
    } else {
      setInitRouteName(SCREENS_NAME.welcome)
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
        name={SCREENS_NAME.main}
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
