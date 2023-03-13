import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Register, ForgotPassword, Logout } from 'screens';
import BottomTabs from 'navigation/mainTabs';

const Stack = createNativeStackNavigator();

const SCREENS = {
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
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
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
