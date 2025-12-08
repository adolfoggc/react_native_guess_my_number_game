import Colors from '@/constants/Colors';
import { StyleSheet, Text } from 'react-native';

function InstructionText({children, style}: instructionProps){
  return (
    <Text style={[styles.instruction, style]}>{children}</Text>
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
  children: any,
  style: any
}