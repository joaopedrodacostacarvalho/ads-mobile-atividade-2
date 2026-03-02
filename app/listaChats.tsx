import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const chats = [
  {
    id: "1",
    name: "Claudia Alves",
    message: "Do more of what you love.",
    time: "3m ago",
    avatar: "CA",
    color: "#4CAF50",
  },
  {
    id: "2",
    name: "Dani Martinez",
    message: "Do your own thing.",
    time: "5m ago",
    avatar: "DM",
    color: "#2196F3",
  },
  {
    id: "3",
    name: "Kimberly Nguyen",
    message: "Kindness is beautiful.",
    time: "1h ago",
    avatar: "KN",
    color: "#FF9800",
  },
  {
    id: "4",
    name: "Mariana Napolitani",
    message: "Live your purpose.",
    time: "2h ago",
    avatar: "MN",
    color: "#9C27B0",
  },
  {
    id: "5",
    name: "Olivia Wilson",
    message: "You got this.",
    time: "5h ago",
    avatar: "OW",
    color: "#F44336",
  },
  {
    id: "6",
    name: "Rachelle Beaudry",
    message: "You're wonderful.",
    time: "Yesterday",
    avatar: "RB",
    color: "#FF4081",
  },
  {
    id: "7",
    name: "Soo Jin Ae",
    message: "Keep it simple.",
    time: "Yesterday",
    avatar: "SJ",
    color: "#795548",
  },
];

export default function ListaChats() {
  const router = useRouter();

  const renderChatItem = ({ item }: any) => (
    <TouchableOpacity style={styles.chatItem}>
      <View style={[styles.avatar, { backgroundColor: item.color }]}>
        <Text style={styles.avatarText}>{item.avatar}</Text>
      </View>
      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages & Chat</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.markAllText}>Mark all read</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <View style={styles.sortButton}>
              <Text style={styles.sortText}>Sort by time </Text>
              <Ionicons name="chevron-down" size={16} color="#4CAF50" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat List */}
      <FlatList
        data={chats}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.chatList}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#999" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble" size={24} color="#4CAF50" />
          <Text style={[styles.navText, styles.navTextActive]}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="mail" size={24} color="#999" />
          <Text style={styles.navText}>Mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#999" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  headerActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerButton: {
    paddingVertical: 5,
  },
  markAllText: {
    color: "#4CAF50",
    fontSize: 14,
    fontWeight: "500",
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortText: {
    color: "#666",
    fontSize: 14,
  },
  chatList: {
    paddingHorizontal: 20,
  },
  chatItem: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  avatarText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  chatInfo: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  chatTime: {
    fontSize: 12,
    color: "#999",
  },
  chatMessage: {
    fontSize: 14,
    color: "#666",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFF",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#999",
    marginTop: 5,
  },
  navTextActive: {
    color: "#4CAF50",
  },
});
