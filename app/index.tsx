import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Atividade 2 - React Native.</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/consulta")}
        >
          <Text style={styles.menuText}>Página de Consultas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/viagem")}
        >
          <Text style={styles.menuText}>Página de Viagem</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/listaChats")}
        >
          <Text style={styles.menuText}>Lista de Chats</Text>
        </TouchableOpacity>
      </View>
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
