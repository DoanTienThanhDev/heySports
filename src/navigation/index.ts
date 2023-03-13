import { IPush, IPopScreen, IPopToRoot } from './schemes';

const pushScreen = ({ screen, navigation }: IPush) => {
  navigation.navigate(screen)
}

const popScreen = ({ navigation }: IPopScreen) => {
  navigation.goBack()
}

const popToRoot = ({ navigation }: IPopToRoot) => {
  navigation.popToRoot()
}

export {
  pushScreen,
  popScreen,
  popToRoot
}

