import { NavigationProp } from "@react-navigation/native"

import { EIcons, EIconTypes } from 'utils';
import { EFontSize, EColors } from "themes";
export interface INavigation {
  navigation: NavigationProp<ReactNavigation.RootParamList>
  route?: any
}
export interface IPush<T> extends INavigation {
  screen: string,
  params?: T
}

export interface IPopScreen extends INavigation { }

export interface IPopToRoot extends IPopScreen { }

export interface ITabIcon {
  color: string,
  size: EFontSize,
  icon: EIcons,
  iconType?: EIconTypes
}