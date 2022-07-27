export interface StartGameScreenPropsI {
  onPickNumber: Function
}

export interface GameScreenPropsI {
  userNumber: number
  onGuess: () => void
  onGameOver: (guessRounds: number) => void
}

export interface GameOverScreenPropsI {
  numberOfRounds: number
  userNumber: number
  onStartNewGame: () => void
}