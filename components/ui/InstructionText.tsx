import Colors from '@/constants/Colors';
import { StyleSheet, Text } from 'react-native';

function InstructionText({children}: instructionProps){
  return (
    <Text style={styles.instruction}>{children}</Text>
  )
}

export default InstructionText;

const styles = StyleSheet.create({
  instruction: {
    color: Colors.accent500,
  fontSize: 24
  }
})

interface instructionProps {
  children: any
}