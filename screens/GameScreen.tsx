import NumberContainer from '@/components/game/NumberContainer';
import Title from '@/components/ui/Title';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({userNumber}: gameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return(
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>
          Higher or Lower
        </Text>
        {//+-
        }
      </View>
      <View>
        {//LOG ROUNDS
        }
      </View>
    </View>
  )
}

export default GameScreen;

interface gameScreenProps {
  userNumber: number
}

const styles = StyleSheet.create (
  {
    screen: {
      flex: 1,
      padding: 12
    },
  }
)