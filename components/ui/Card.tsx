import { StyleSheet, View, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'
import { CardPropsI } from '../../interfaces/components.interface'

const Card = ({ children }: CardPropsI) => {
  return <View style={styles.card}>{children}</View>
}

export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    //android shadow:
    elevation: 4,
    //ios shadow:
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
})
