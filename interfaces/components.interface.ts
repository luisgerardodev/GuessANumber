import { TextStyle } from "react-native"

export interface NumberContainerPropsI {
  children: React.ReactNode
}

export interface InstructionTextPropsI {
  children: React.ReactNode
  style?: TextStyle
}

export interface PrimatyButtonPropsI {
  children: React.ReactNode
  disabled?: boolean
  onPress?: () => void
}

export interface TitlePropsI {
  children: React.ReactNode,
  style?: TextStyle
}

export interface GuessLogItemPropsI {
  roundNumber: number
  guess: number
}

export interface CardPropsI {
  children: React.ReactNode
}