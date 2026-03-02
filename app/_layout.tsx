import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="consulta" options={{ title: "Consulta" }} />
      <Stack.Screen name="viagem" options={{ title: "Viagem" }} />
      <Stack.Screen name="ListaChats" options={{ title: "Lista de Chats" }} />
    </Stack>
  );
}
