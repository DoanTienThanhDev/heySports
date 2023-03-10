import React, { useState } from 'react';

import { ContainerPage } from 'components/common';
import { RNButton, RNImage, RNInput, RNText, RNView } from 'components/core';
import { COLORS, SCREENS } from '../../values';
import { IMAGES } from '../../assets';
import { imgLogo } from '../../assets/images';

const Home = ({ componentId }: { componentId: string }) => {
  const [email, setEmail] = React.useState<boolean>(false)
  const [password, setPassword] = React.useState<string>('')

  const onChangeEmail = () => {
    setEmail(!email)
  }

  return (
    <RNButton onPress={onChangeEmail} title="pressMe" mTop={100} />
  );
};

export default Home;
