import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Settings, Pitch, Booking, Chat } from 'screens';
import { RNIcon, RNText } from 'components/core';

import { EIcons, EIconTypes, SCREENS_NAME } from 'utils';
import { EColors, EFontWeight } from 'themes';
import { ITabIcon } from 'navigation/schemes';

const MainTabs = () => {
  const Tab = createBottomTabNavigator();

  const TabIcon = ({ color, size, icon, iconType }: ITabIcon) => <RNIcon name={icon} color={color} size={size} type={iconType || EIconTypes.ionIcon} />

  const getFontWeight = (focused: boolean) => focused ? EFontWeight.bold : EFontWeight.normal

  return (
    <Tab.Navigator initialRouteName={SCREENS_NAME.home} screenOptions={{
      tabBarActiveTintColor: EColors.primary,
      tabBarInactiveTintColor: EColors.secondText,
      headerShown: false,
    }}
    >
      <Tab.Screen name={SCREENS_NAME.home} component={Home}
        options={{
          headerTintColor: EColors.primary,
          tabBarIcon: ({ color, size, focused }) => <TabIcon color={color} size={size} icon={focused ? EIcons.home : EIcons.home_outline} />,
          tabBarLabel: ({ focused, children, color }) => <RNText color={color} fontWeight={getFontWeight(focused)}>{children}</RNText>
        }} />
      <Tab.Screen name={SCREENS_NAME.pitch} component={Pitch}
        options={{
          tabBarIcon: ({ color, size, focused }) => <TabIcon color={color} size={size} icon={focused ? EIcons.map_box : EIcons.map_box_outline} />,
          tabBarLabel: ({ focused, children, color }) => <RNText color={color} fontWeight={getFontWeight(focused)}>{children}</RNText>

        }} />
      <Tab.Screen name={SCREENS_NAME.booking} component={Booking}
        options={{
          tabBarIcon: ({ color, size }) => <TabIcon color={color} size={size} icon={EIcons.soccer_field} iconType={EIconTypes.materialCommunityIcons} />,
          tabBarLabel: ({ focused, children, color }) => <RNText color={color} fontWeight={getFontWeight(focused)}>{children}</RNText>
        }} />
      <Tab.Screen name={SCREENS_NAME.chat} component={Chat}
        options={{
          tabBarIcon: ({ color, size, focused }) => <TabIcon color={color} size={size} icon={focused ? EIcons.chat_box : EIcons.chat_box_outline} />,
          tabBarLabel: ({ focused, color, children }) => <RNText color={color} fontWeight={getFontWeight(focused)}>{children}</RNText>
        }} />
      <Tab.Screen name={SCREENS_NAME.settings} component={Settings}
        options={{
          headerTintColor: EColors.primary,
          tabBarIcon: ({ color, size, focused }) => <TabIcon color={color} size={size} icon={focused ? EIcons.settings : EIcons.settings_outline} />,
          tabBarLabel: ({ focused, children, color }) => <RNText color={color} fontWeight={getFontWeight(focused)}>{children}</RNText>
        }} />
    </Tab.Navigator>
  );
}

export default MainTabs