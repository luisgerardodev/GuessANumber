import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import { PrimatyButtonPropsI } from '../../interfaces/components.interface'

const PrimaryButton = ({ children, onPress }: PrimatyButtonPropsI) => {
  const pressHandler = () => {
    onPress?.()
  }
  
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer}
        onPress={pressHandler}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}
export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  //ios
  pressed: {
    opacity: 0.75
  }
})
