import GameScreen from "@/screens/GameScreen";
import StartGameScreen from "@/screens/StartGameScreen";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

export default function Index() {
  const [userNumber, setUserNumber] = useState<number | null>() ;

  function pickedNumberHandler(pickedNumber: number): void {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient 
      colors={['#4e0329','#ddb52f']} 
      style={styles.rootScreen}>
      <ImageBackground 
        source={require('../assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}

      >
        { screen }
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});