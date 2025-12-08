import Title from '@/components/ui/Title';
import Colors from '@/constants/Colors';
import { Image, StyleSheet, Text, View } from 'react-native';

function GameOverScreen({last_number}: gameOverProps) {
  return(
    <View style={styles.rootContainer}>
      <Title>GAME OVER!!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image} 
          source={require('../assets/images/success.png')}/>
      </View>
      <Text>
        Your phone needed X rounds to guess the number {last_number}
      </Text>
    </View>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

interface gameOverProps {
  last_number: number
}