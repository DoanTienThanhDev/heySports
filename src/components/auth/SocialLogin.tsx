import React from 'react'
import { RNView, RNPressable, RNImage } from 'components/core'

import { FONTS, IMAGES } from 'themes'

interface ISocialLogin {
  onLoginGoogle: () => void,
  onLoginFacebook: () => void,
  onLoginApple: () => void
}

const SocialLogin = ({ onLoginGoogle, onLoginFacebook, onLoginApple }: ISocialLogin) => {
  return (
    <RNView isRow mBottom={FONTS.s16}>
      <RNPressable fill center onPress={onLoginGoogle}>
        <RNImage src={IMAGES.icGoogle} size={60} />
      </RNPressable>
      <RNPressable fill center onPress={onLoginFacebook}>
        <RNImage src={IMAGES.icFacebook} size={60} />
      </RNPressable>
      <RNPressable fill center onPress={onLoginApple}>
        <RNImage src={IMAGES.icApple} size={60} />
      </RNPressable>
    </RNView>
  )
}

export default SocialLogin
