import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function PrimaryButton({ children, onPress } : primaryButtonProps) {

  return (
    <View style={styles.buttonOuterContainer}>
        <Pressable 
          style={({pressed}) => 
            pressed 
            ? [styles.buttonContainer, styles.pressed]
            : styles.buttonContainer
          } 
          onPress={onPress} 
          android_ripple={{color: Colors.primary600, foreground: true}}
        >
          { 
            typeof children == typeof Ionicons 
            ? <View>{children}</View>
            : <Text style={styles.buttonText}>{children}</Text>
          }
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75
  }
})

export default PrimaryButton;

interface primaryButtonProps {
  children: any,
  onPress: () => void
}