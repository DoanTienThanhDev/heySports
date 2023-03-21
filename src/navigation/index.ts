import { IPush, IPopScreen, IPopToRoot } from './schemes';
import { INavigation } from 'navigation/schemes';
import { SCREENS_NAME } from 'utils';

const pushScreen = <T>({ screen, navigation, params }: IPush<T>) => {
  navigation.navigate(screen, params)
}

const popScreen = ({ navigation }: IPopScreen) => {
  navigation.goBack()
}

const popToRoot = ({ navigation }: IPopToRoot) => {
  navigation.popToRoot()
}

const pushToMain = ({ navigation }: INavigation) => {
  pushScreen({ screen: SCREENS_NAME.main, navigation })
}

const pushToLogin = ({ navigation }: INavigation) => {
  pushScreen({ screen: SCREENS_NAME.login, navigation })
}


export {
  pushScreen,
  popScreen,
  popToRoot,
  pushToMain,
  pushToLogin
}

