import { Text, View, StyleSheet } from "react-native";

export default function Viagem() {
  return (
    <View style={styles.container}>
      <Text>Esta é a página de Viagem.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  menuContainer: {
    width: "100%",
    maxWidth: 300,
  },

  menuItem: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  menuText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
