import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { ContainerPage } from 'components/common';
import { RNButton, RNImage, RNInput, RNText, RNView, RNContainer } from 'components/core';

import { IPage } from 'screens/schemes';
import { EColors } from 'themes';


const Home = ({ navigation }: IPage) => {
  const [email, setEmail] = React.useState<boolean>(false)
  const [password, setPassword] = React.useState<string>('')

  const onChangeEmail = () => {
    setEmail(!email)
  }

  return (
    <RNView fill>
      <RNView fill color={EColors.primary}>

      </RNView>
      <RNView flex={3}>

      </RNView>
    </RNView>
  );
};

export default Home;
