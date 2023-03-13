import React from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { FONTS } from 'themes';

interface IRNIcon {
  name: string,
  color?: string,
  size?: number,
  type?: string,
  onPress?: () => void
}

const RNIcon = ({ type, name, size, color, onPress }: IRNIcon) => {
  const Icon = () => {
    switch (type) {
      case 'FontAwesome':
        return <IconFontAwesome name={name} size={size || FONTS.s14} color={color} onPress={onPress} />
      case 'AntDesign':
        return <IconAntDesign name={name} size={size || FONTS.s14} color={color} onPress={onPress} />
      case 'Ionicons':
        return <IconIonicons name={name} size={size || FONTS.s14} color={color} onPress={onPress} />
      case 'FontAwesome5':
        return <FontAwesome5 name={name} size={size || FONTS.s14} color={color} onPress={onPress} />
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={name} size={size || FONTS.s14} color={color} onPress={onPress} />
      default:
        return <IconFontAwesome name={name} size={size || FONTS.s14} color={color} onPress={onPress} />
    }
  }

  return <Icon />
}

export default RNIcon;