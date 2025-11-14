import PrimaryButton from '@/components/PrimaryButton';
import { StyleSheet, TextInput, View } from 'react-native';

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2}/>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    backgroundColor: '#72063c',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  numberInput: {
    height: 55,
    fontSize: 32,
    borderColor: '#ddb52f',
    borderWidth: 2,
    color: '#ddb52f',
    marginVertical: 10,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center'
  }
});

export default StartGameScreen;