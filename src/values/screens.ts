import { useWindowDimensions } from 'react-native';

const { width, height, fontScale } = useWindowDimensions()

const SCREENS = {
  width,
  height,
  fontScale
}

export default SCREENS