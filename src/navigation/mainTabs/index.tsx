import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Settings, Pitch, Booking, Conversations } from 'screens';
import { RNIcon, RNText } from 'components/core';

import { COLORS, FONTS } from 'themes';
import { ITabIcon } from 'navigation/schemes';

const MainTabs = () => {
  const Tab = createBottomTabNavigator();

  const TabIcon = ({ color, size, icon, iconType }: ITabIcon) => <RNIcon name={icon} color={color} size={size} type={iconType || "Ionicons"} />

  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.secondText,
      headerShown: false,
    }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          headerTintColor: COLORS.primary,
          tabBarIcon: ({ color, size, focused }) => <TabIcon color={color} size={size} icon={focused ? "home" : "home-outline"} />,
          tabBarLabel: ({ focused, children, color }) => <RNText color={color} size={FONTS.s14} fontWeight={focused ? "bold" : "400"}>{children}</RNText>
        }} />
      <Tab.Screen name="Pitch" component={Pitch}
        options={{
          tabBarIcon: ({ color, size, focused }) => <TabIcon color={color} size={size} icon={focused ? "md-map-sharp" : "md-map-outline"} />,
          tabBarLabel: ({ focused, children, color }) => <RNText color={color} size={FONTS.s14} fontWeight={focused ? "bold" : "400"}>{children}</RNText>

        }} />
      <Tab.Screen name="Booking" component={Booking}
        options={{
          tabBarIcon: ({ color, size }) => <TabIcon color={color} size={size} icon="soccer-field" iconType='MaterialCommunityIcons' />,
          tabBarLabel: ({ focused, children, color }) => <RNText color={color} size={FONTS.s14} fontWeight={focused ? "bold" : "400"}>{children}</RNText>
        }} />
      <Tab.Screen name="Conversations" component={Conversations}
        options={{
          tabBarIcon: ({ color, size, focused }) => <TabIcon color={color} size={size} icon={focused ? "chatbox" : "chatbox-outline"} />,
          tabBarLabel: ({ focused, color }) => <RNText color={color} size={FONTS.s14} fontWeight={focused ? "bold" : "400"}>{"Chat"}</RNText>
        }} />
      <Tab.Screen name='Settings' component={Settings}
        options={{
          headerTintColor: COLORS.primary,
          tabBarIcon: ({ color, size, focused }) => <TabIcon color={color} size={size} icon={focused ? "settings" : "settings-outline"} />,
          tabBarLabel: ({ focused, children, color }) => <RNText color={color} size={FONTS.s14} fontWeight={focused ? "bold" : "400"}>{children}</RNText>
        }} />
    </Tab.Navigator>
  );
}

export default MainTabs