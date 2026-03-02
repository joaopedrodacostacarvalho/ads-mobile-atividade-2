import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Consulta() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome</Text>
          <Text style={styles.userName}>Dani Martinez</Text>
        </View>
        <View style={styles.searchIcon}>
          <Ionicons name="search" size={24} color="#333" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryItem}>
            <View style={[styles.categoryIcon, { backgroundColor: "#E8F5E9" }]}>
              <Ionicons name="medical" size={24} color="#4CAF50" />
            </View>
            <Text style={styles.categoryText}>Consultation</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <View style={[styles.categoryIcon, { backgroundColor: "#FFEBEE" }]}>
              <Ionicons name="tooth" size={24} color="#F44336" />
            </View>
            <Text style={styles.categoryText}>Dentist</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <View style={[styles.categoryIcon, { backgroundColor: "#E3F2FD" }]}>
              <Ionicons name="heart" size={24} color="#2196F3" />
            </View>
            <Text style={styles.categoryText}>Cardiologist</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>
            <View style={[styles.categoryIcon, { backgroundColor: "#FFF3E0" }]}>
              <Ionicons name="business" size={24} color="#FF9800" />
            </View>
            <Text style={styles.categoryText}>Hospital</Text>
          </TouchableOpacity>
        </View>

        {/* Show All */}
        <TouchableOpacity style={styles.showAllContainer}>
          <Text style={styles.showAllText}>Show All</Text>
          <Ionicons name="chevron-forward" size={20} color="#4CAF50" />
        </TouchableOpacity>

        {/* Top Doctors */}
        <Text style={styles.sectionTitle}>Top doctors</Text>

        {/* Doctor Card 1 */}
        <View style={styles.doctorCard}>
          <View style={styles.doctorInfo}>
            <View style={styles.doctorAvatar}>
              <Ionicons name="person" size={30} color="#FFF" />
            </View>
            <View style={styles.doctorDetails}>
              <Text style={styles.doctorName}>dr. Olivia Wilson</Text>
              <Text style={styles.doctorSpecialty}>
                Consultant - Physiotherapy
              </Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={16} color="#FFC107" />
                <Text style={styles.ratingText}>4.9 (37 Reviews)</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Doctor Card 2 */}
        <View style={styles.doctorCard}>
          <View style={styles.doctorInfo}>
            <View style={[styles.doctorAvatar, { backgroundColor: "#FF9800" }]}>
              <Ionicons name="person" size={30} color="#FFF" />
            </View>
            <View style={styles.doctorDetails}>
              <Text style={styles.doctorName}>dr. Jonathan Patterson</Text>
              <Text style={styles.doctorSpecialty}>
                Consultant - Internal Medicine
              </Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={16} color="#FFC107" />
                <Text style={styles.ratingText}>4.9 (37 Reviews)</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#4CAF50" />
          <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="medical" size={24} color="#999" />
          <Text style={styles.navText}>Doctors</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar" size={24} color="#999" />
          <Text style={styles.navText}>Appointment</Text>
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
    marginBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: "#666",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  searchIcon: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginLeft: 20,
    marginBottom: 15,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
    color: "#666",
  },
  showAllContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  showAllText: {
    color: "#4CAF50",
    marginRight: 5,
  },
  doctorCard: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doctorInfo: {
    flexDirection: "row",
  },
  doctorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 12,
    color: "#999",
    marginLeft: 5,
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
