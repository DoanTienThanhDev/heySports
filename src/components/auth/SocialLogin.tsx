import React from 'react'
import { RNView, RNPressable, RNImage } from 'components/core'

import { EFontSize, ESPacing, IMAGES } from 'themes'

interface ISocialLogin {
  onLoginGoogle: () => void,
  onLoginFacebook: () => void,
  onLoginApple: () => void
}

const SocialLogin = ({ onLoginGoogle, onLoginFacebook, onLoginApple }: ISocialLogin) => {
  return (
    <RNView isRow mBottom={ESPacing.space_16}>
      <RNPressable fill center onPress={onLoginGoogle}>
        <RNImage src={IMAGES.icGoogle} size={EFontSize.size_60} />
      </RNPressable>
      <RNPressable fill center onPress={onLoginFacebook}>
        <RNImage src={IMAGES.icFacebook} size={EFontSize.size_60} />
      </RNPressable>
      <RNPressable fill center onPress={onLoginApple}>
        <RNImage src={IMAGES.icApple} size={EFontSize.size_60} />
      </RNPressable>
    </RNView>
  )
}

export default SocialLogin
