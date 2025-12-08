import { Text } from 'react-native';

function GameOverScreen({last_number}: gameOverProps) {
  return(
    <>
      <Text>
        Game is Over!
      </Text>
      <Text>
        Last bet: {last_number}
      </Text>
    </>
  )
}

export default GameOverScreen;

interface gameOverProps {
  last_number: number
}