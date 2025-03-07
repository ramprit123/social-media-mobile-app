import { Tabs } from "expo-router";
import { Search, Bell, Home, Plus, Bookmark, User } from "lucide-react-native";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: "#ddd",
          backgroundColor: "#fff",
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#999",
        tabBarShowLabel: true,
        tabBarItemStyle: {
          ...Platform.select({
            android: {
              padding: 0, // Remove ripple effect on Android
              pressColor: "transparent", // Disable press effect on Android
            },
          }),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, size }) => <Bell size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => <Plus size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: "Bookmark",
          tabBarIcon: ({ color, size }) => (
            <Bookmark size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
