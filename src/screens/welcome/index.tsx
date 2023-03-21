import React, { useState } from 'react'

import { RNButton, RNImage, RNText, RNView } from 'components/core';
import { ContainerPage } from 'components/common';

import { translate } from 'translate';
import { pushToLogin } from 'navigation';
import { useSetLocalStore } from 'hooks';
import { INavigation } from 'navigation/schemes';

import { IMAGES, SCREEN_SIZE, EFontWeight, EColors, EFontSize, ESPacing } from 'themes';
import { CONSTANTS } from 'utils';

interface IContentIntro {
  src: string | number,
  subTitle: string,
  desc: string
}

const Welcome = ({ navigation }: INavigation) => {
  const [steps, setSteps] = useState<number>(0)

  const ContentIntro = ({ src, subTitle, desc }: IContentIntro) => {
    return (
      <>
        <RNImage src={src} h={SCREEN_SIZE.width / 1.5} w={steps == 0 ? SCREEN_SIZE.width : SCREEN_SIZE.width - ESPacing.space_100} />
        <RNText mTop={ESPacing.space_8} size={EFontSize.size_18} fontWeight={EFontWeight.medium}>{subTitle}</RNText>
        <RNText mTop={ESPacing.space_16} size={EFontSize.primary} color={EColors.secondText}>{desc}</RNText>
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
      h={ESPacing.space_10}
      w={ESPacing.space_10}
      borderColor={isActive ? EColors.primary : EColors.primaryText}
      borderRadius={5} borderWidth={1} color={isActive ? EColors.primary : EColors.bgPage} mHoz={ESPacing.space_15} />
  }

  const onNext = async () => {
    if (steps === 2) {
      useSetLocalStore(CONSTANTS.LOCAL_STORE_KEY.welcome, true)
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
          <RNView isRow mTop={ESPacing.space_60}  >
            <DotWelcome isActive={steps === 0} />
            <DotWelcome isActive={steps === 1} />
            <DotWelcome isActive={steps === 2} />
          </RNView>
          <RNButton mTop={32} title={translate(steps === 2 ? 'AUTH.login' : 'APP.nextStep')} onPress={onNext} pHoz={ESPacing.space_100} />
        </RNView>
      </RNView>
    </ContainerPage>
  )
}

export default Welcome
