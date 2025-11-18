import { StyleSheet, Text } from 'react-native';

function Title({children}: titleProps) {
  return (
    <Text style={styles.title}>
      { children }
    </Text>
  )
}

const styles = StyleSheet.create (
  {
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      borderWidth: 2,
      borderColor: 'white',
      padding: 12
    }
  }
)

export default Title;

interface titleProps {
  children: string
}