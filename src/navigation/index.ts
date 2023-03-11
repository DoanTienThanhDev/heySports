import { IPush, IPopScreen, IPopToRoot } from './schemes';

const pushScreen = ({ screen, navigation }: IPush) => {
  navigation.navigate(screen)
}

const popScreen = ({ navigation }: IPopScreen) => {
  navigation.popToTop()
}

const popToRoot = ({ navigation }: IPopToRoot) => {
  navigation.popToTop()
}

export {
  pushScreen,
  popScreen,
  popToRoot
}

