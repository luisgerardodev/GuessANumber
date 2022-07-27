import React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'
import Colors from '../../constants/colors'
import { InstructionTextPropsI } from '../../interfaces/components.interface'

const InstructionText = ({ children, style = {} }: InstructionTextPropsI) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: 'open-sans-bold'
  },
})
