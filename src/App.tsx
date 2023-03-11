import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Register, ForgotPassword, Logout, Home } from 'screens';

const Stack = createNativeStackNavigator();

const SCREENS = {
  Login,
  Register,
  ForgotPassword,
  Logout,
  Home
}

const renderListChild = () => {
  return <>
    {
      Object.keys(SCREENS).map((item) => <Stack.Screen key={item} name={item} component={SCREENS[item]} />)
    }
  </>
}

const AppStackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Main'}
      screenOptions={{ headerShown: false }}
    >
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
