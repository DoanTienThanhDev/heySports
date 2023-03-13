import { NavigationProp } from "@react-navigation/native"

export interface INavigation {
  navigation: NavigationProp<ReactNavigation.RootParamList>
}
export interface IPush extends INavigation {
  screen: string
}

export interface IPopScreen extends INavigation { }

export interface IPopToRoot extends IPopScreen { }

export interface ITabIcon {
  color: string,
  size: number,
  icon: string,
  iconType?: string
}