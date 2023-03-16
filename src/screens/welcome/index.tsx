import React, { useState } from 'react'

import { RNButton, RNImage, RNText, RNView } from 'components/core';
import { ContainerPage } from 'components/common';

import { INavigation } from 'navigation/schemes';
import { COLORS, IMAGES, SCREENS, FONTS } from 'themes';
import { translate } from 'translate';
import { pushToLogin } from 'navigation';
import { useSetLocalStore } from 'hooks';
import { CONSTANTS } from 'utils';

interface IContentIntro {
  src: string | number,
  subTitle: string,
  desc: string
}
let size = FONTS.s10

const Welcome = ({ navigation }: INavigation) => {
  const [steps, setSteps] = useState<number>(0)

  const ContentIntro = ({ src, subTitle, desc }: IContentIntro) => {
    return (
      <>
        <RNImage src={src} h={SCREENS.width / 1.5} w={steps == 0 ? SCREENS.width : SCREENS.width - 100} />
        <RNText mTop={8} size={FONTS.s18} fontWeight="600">{subTitle}</RNText>
        <RNText mTop={16} size={FONTS.s14} color={COLORS.secondText}>{desc}</RNText>
      </>
    )
  }

  const renderItem = () => {
    switch (steps) {
      case 0:
        return <ContentIntro src={IMAGES.imgFirstIntro} subTitle={translate('APP.subTitleFirstIntro')} desc={translate('APP.descFirstIntro')} />
      case 1:
        return <ContentIntro src={IMAGES.imgSecondIntro} subTitle={'Facebook'} desc={translate('APP.subTitle')} />
      case 2:
        return <ContentIntro src={IMAGES.imgFinalIntro} subTitle={'Google'} desc={translate('APP.subTitle')} />
    }
  }

  const DotWelcome = ({ isActive }: { isActive: boolean }) => {
    return <RNView
      h={size}
      w={size}
      borderColor={isActive ? COLORS.primary : COLORS.primaryText}
      borderRadius={5} borderWidth={1} color={isActive ? COLORS.primary : COLORS.bgPage} mHoz={15} />
  }

  const onNext = async () => {
    if (steps === 2) {
      useSetLocalStore(CONSTANTS.LOCAL_STORE_KEY.WELCOME, true)
      pushToLogin({ navigation })
    } else {
      setSteps(steps + 1)
    }
  }

  const onBack = () => {
    if (steps != 0) {
      setSteps(steps - 1)
    }
  }

  return (
    <ContainerPage navigation={navigation} isBackIcon={steps === 0 ? false : true} onPressBack={onBack}>
      <RNView fill center>
        {renderItem()}
        <RNView center>
          <RNView isRow mTop={60}  >
            <DotWelcome isActive={steps === 0} />
            <DotWelcome isActive={steps === 1} />
            <DotWelcome isActive={steps === 2} />
          </RNView>
          <RNButton mTop={32} title={translate(steps === 2 ? 'AUTH.login' : 'APP.nextStep')} onPress={onNext} pHoz={100} />
        </RNView>
      </RNView>
    </ContainerPage>
  )
}

export default Welcome
