import Colors from "@/constants/Colors";
import { Dimensions, StyleSheet, View } from "react-native";

function Card({children}: cardProps){
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card;

const deviceWidth = Dimensions.get('window').width

interface cardProps {
  children: any
}

const styles = StyleSheet.create({
  card: {
    marginTop: deviceWidth > 380 ? 18 : 36,
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