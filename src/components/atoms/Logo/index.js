import React from 'react';
import { Image, StyleSheet } from 'react-native'

import logoImg from '../../../../assets/LogoEmpire.png'

export const Logo = () => {
  return(
    <Image source={logoImg} style={styles.logo}/>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: 64,
    width: 64,
  }
})