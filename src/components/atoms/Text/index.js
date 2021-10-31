import React from 'react';
import { Text, StyleSheet } from 'react-native'

export const CustomText = ({children}) => {
  return(
    <Text style={styles.title}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12
  }
})