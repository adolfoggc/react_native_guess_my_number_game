import NumberContainer from '@/components/game/NumberContainer';
import Card from '@/components/ui/Card';
import InstructionText from '@/components/ui/InstructionText';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Title from '@/components/ui/Title';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import GuessLogItem from '../components/game/GuessLogItem';

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
  const [guessRounds, setGuessRounds] =  useState([initialGuess]);

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

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(this: any, direction: string) {
    if(currentGuess == userNumber) {
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

    let newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessRounds(previousGuessRounds => [newRandomNumber, ...previousGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return(
    <View style={styles.screen}>
      <Title>{ "Opponent's Guess" }</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower') }>
              <Ionicons name='remove' size={22}></Ionicons>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name='add' size={22}></Ionicons>
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <FlatList
        alwaysBounceVertical={false}
        data={guessRounds}
        renderItem= {(guessRound) => {
          return <GuessLogItem 
            guess={guessRound.item} 
            roundNumber={guessRoundsListLength - guessRound.index}/>
        }}>
      </FlatList>
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
    instructionText: {
      marginBottom: 12
    },
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
