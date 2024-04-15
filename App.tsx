import { Text, View } from "react-native";
import styled from "styled-components/native";

const TextNew = styled.Text`
  font-size: 24px;
  color: red;
`;

export default function App() {
  return (
    <View>
      <Text>testando</Text>
      <TextNew>Novo Texte</TextNew>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
