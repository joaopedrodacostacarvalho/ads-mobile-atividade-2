import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Viagem() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search here ..."
          placeholderTextColor="#999"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Category */}
        <View style={styles.categoryHeader}>
          <Text style={styles.sectionTitle}>Category</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesScroll}
        >
          <TouchableOpacity style={styles.categoryChip}>
            <Text style={styles.categoryChipText}>Resort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryChip}>
            <Text style={styles.categoryChipText}>Homestay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryChip}>
            <Text style={styles.categoryChipText}>Hotel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryChip}>
            <Text style={styles.categoryChipText}>Lodge</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryChip}>
            <Text style={styles.categoryChipText}>Villa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryChip}>
            <Text style={styles.categoryChipText}>Apartment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryChip}>
            <Text style={styles.categoryChipText}>Hostel</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Popular Destination */}
        <View style={styles.destinationHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Destination Card */}
        <View style={styles.destinationCard}>
          <View style={styles.destinationImage}>
            <Ionicons name="image" size={50} color="#CCC" />
          </View>
          <View style={styles.destinationInfo}>
            <Text style={styles.destinationName}>Donna Stroupe</Text>
            <Text style={styles.destinationType}>Resort</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={16} color="#FFC107" />
              <Ionicons name="star" size={16} color="#FFC107" />
              <Ionicons name="star" size={16} color="#FFC107" />
              <Ionicons name="star" size={16} color="#FFC107" />
              <Ionicons name="star-outline" size={16} color="#FFC107" />
            </View>
          </View>
        </View>

        {/* Recommended */}
        <View style={styles.recommendedHeader}>
          <Text style={styles.sectionTitle}>Recommended</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Recommended Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.recommendedScroll}
        >
          <View style={styles.recommendedCard}>
            <View style={styles.recommendedImage}>
              <Ionicons name="image" size={40} color="#CCC" />
            </View>
            <Text style={styles.recommendedName}>Donna Stroupe</Text>
            <Text style={styles.recommendedType}>Resort</Text>
          </View>

          <View style={styles.recommendedCard}>
            <View style={styles.recommendedImage}>
              <Ionicons name="image" size={40} color="#CCC" />
            </View>
            <Text style={styles.recommendedName}>Mountain View</Text>
            <Text style={styles.recommendedType}>Hotel</Text>
          </View>

          <View style={styles.recommendedCard}>
            <View style={styles.recommendedImage}>
              <Ionicons name="image" size={40} color="#CCC" />
            </View>
            <Text style={styles.recommendedName}>Beach Resort</Text>
            <Text style={styles.recommendedType}>Villa</Text>
          </View>
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#4CAF50" />
          <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={24} color="#999" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="compass" size={24} color="#999" />
          <Text style={styles.navText}>Explore</Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  seeAllText: {
    color: "#4CAF50",
    fontSize: 14,
  },
  categoriesScroll: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  categoryChip: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryChipText: {
    color: "#666",
    fontSize: 14,
  },
  destinationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  destinationCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  destinationImage: {
    width: 80,
    height: 80,
    backgroundColor: "#EEE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  destinationInfo: {
    flex: 1,
    justifyContent: "center",
  },
  destinationName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  destinationType: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  recommendedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  recommendedScroll: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  recommendedCard: {
    backgroundColor: "#FFF",
    width: 120,
    marginRight: 15,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  recommendedImage: {
    width: 60,
    height: 60,
    backgroundColor: "#EEE",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  recommendedName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  recommendedType: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
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
