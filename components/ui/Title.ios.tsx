import { Platform, StyleSheet, Text } from 'react-native'
import React from 'react'
import { TitlePropsI } from '../../interfaces/components.interface'

const Title = ({ children, style }: TitlePropsI) => (
  <Text style={[styles.title, style]}>{children}</Text>
)

export default Title

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300
  }
})