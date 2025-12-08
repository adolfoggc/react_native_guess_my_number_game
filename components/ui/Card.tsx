import Colors from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

function Card({children}: cardProps){
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card;

interface cardProps {
  children: any
}

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  }
})