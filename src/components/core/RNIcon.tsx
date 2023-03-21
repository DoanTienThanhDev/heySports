import React from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { EFontSize, EColors } from 'themes';
import { EIcons, EIconTypes } from 'utils';

interface IRNIcon {
  name: EIcons,
  color?: EColors | string,
  size?: EFontSize,
  type?: EIconTypes,
  onPress?: () => void
}

const RNIcon = ({ type, name, size, color, onPress }: IRNIcon) => {
  const Icon = () => {
    switch (type) {
      case EIconTypes.fontAwesome:
        return <IconFontAwesome name={name} size={size || EFontSize.size_18} color={color} onPress={onPress} />
      case EIconTypes.antDesign:
        return <IconAntDesign name={name} size={size || EFontSize.size_18} color={color} onPress={onPress} />
      case EIconTypes.ionIcon:
        return <IconIonicons name={name} size={size || EFontSize.size_18} color={color} onPress={onPress} />
      case EIconTypes.fontAwesome5:
        return <FontAwesome5 name={name} size={size || EFontSize.size_18} color={color} onPress={onPress} />
      case EIconTypes.materialCommunityIcons:
        return <MaterialCommunityIcons name={name} size={size || EFontSize.size_18} color={color} onPress={onPress} />
      default:
        return <IconFontAwesome name={name} size={size || EFontSize.size_18} color={color} onPress={onPress} />
    }
  }

  return <Icon />
}

export default RNIcon;