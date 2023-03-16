import { IPush, IPopScreen, IPopToRoot } from './schemes';
import { INavigation } from 'navigation/schemes';

const pushScreen = ({ screen, navigation }: IPush) => {
  navigation.navigate(screen)
}

const popScreen = ({ navigation }: IPopScreen) => {
  navigation.goBack()
}

const popToRoot = ({ navigation }: IPopToRoot) => {
  navigation.popToRoot()
}

const pushToMain = ({ navigation }: INavigation) => {
  pushScreen({ screen: 'Main', navigation })
}

const pushToLogin = ({ navigation }: INavigation) => {
  pushScreen({ screen: 'Login', navigation })
}


export {
  pushScreen,
  popScreen,
  popToRoot,
  pushToMain,
  pushToLogin
}

