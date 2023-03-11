export interface IPush {
  screen: string,
  navigation: any
}

export interface IPopScreen {
  navigation: any
}

export interface IPopToRoot extends IPopScreen { }