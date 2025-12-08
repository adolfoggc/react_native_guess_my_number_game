import NumberContainer from '@/components/game/NumberContainer';
import Card from '@/components/ui/Card';
import InstructionText from '@/components/ui/InstructionText';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Title from '@/components/ui/Title';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}: gameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function guessIsLowerThanNumber(direction: string){
    return direction==='lower' && currentGuess < userNumber;
  }

  function guessIsGreaterThanNumber(direction: string){
    return direction==='greater' && currentGuess > userNumber;
  }

  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(this: any, direction: string) {
    console.log('=====================')
    console.log('current', currentGuess);
    if(currentGuess == userNumber) {
      Alert.alert('Acertou, mizerávi!', 'Aêeeee', [
        {text: 'Que lindo!', style: 'default'}
      ])
      return;
    }

    if( guessIsLowerThanNumber(direction) ||  
        guessIsGreaterThanNumber(direction)
    ){
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'}
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    console.log('new min', minBoundary);
    console.log('new max', maxBoundary);
    setCurrentGuess( 
      generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    );
  }

  return(
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower') }>-</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        {//LOG ROUNDS
        }
      </View>
    </View>
  )
}

export default GameScreen;

interface gameScreenProps {
  userNumber: number,
  onGameOver: () => void
}

const styles = StyleSheet.create (
  {
    screen: {
      flex: 1,
      padding: 12
    },
    buttonsContainer: {
      flexDirection: 'row'
    },
    buttonContainer: {
      flex: 1
    }
  }
)
