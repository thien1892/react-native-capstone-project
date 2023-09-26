import { View, Image, TextInput, StyleSheet, Text } from "react-native";
import Onboarding from "./screens/Onboarding";


export default function App() {
  return(
    <View style={styles.container}>
    {/* <Text>Hello</Text> */}
    <Onboarding/>
  </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    // alignItems: 'center',
    // alignContent: 'center',
  }
});