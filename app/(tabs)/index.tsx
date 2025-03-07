import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ListRenderItem,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Heart, MessageCircle, Share } from "lucide-react-native";
import { memo, useMemo } from "react";

interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  image: string;
  likes: number;
  comments: number;
}

const DUMMY_POSTS = [
  {
    id: "1",
    user: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    content: "Just finished a great workout session! 💪 #fitness #health",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    likes: 128,
    comments: 24,
  },
  {
    id: "2",
    user: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    content: "Beautiful sunset at the beach today 🌅 #nature #peace",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    likes: 256,
    comments: 42,
  },
  {
    id: "3",
    user: {
      name: "Aisha Khan",
      avatar: "https://images.unsplash.com/photo-1531427186504-62522a94ad65",
    },
    content:
      "Just finished reading a fantastic book! Highly recommend it. 📚 #booklover #reading",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    likes: 189,
    comments: 28,
  },
  {
    id: "4",
    user: {
      name: "David Lee",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a6796",
    },
    content: "Exploring new trails in the mountains. ⛰️ #adventure #hiking",
    image: "https://images.unsplash.com/photo-1518831984231-152c105c3199",
    likes: 312,
    comments: 55,
  },
  {
    id: "5",
    user: {
      name: "Elena Rodriguez",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a1932d6350",
    },
    content: "Delicious homemade pasta for dinner tonight. 🍝 #cooking #foodie",
    image: "https://images.unsplash.com/photo-1512621776951-a5714139ba90",
    likes: 220,
    comments: 35,
  },
  {
    id: "6",
    user: {
      name: "Samuel Brown",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d18",
    },
    content: "Coding late into the night. 💻 #developer #programming",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713",
    likes: 150,
    comments: 20,
  },
  {
    id: "7",
    user: {
      name: "Priya Patel",
      avatar: "https://images.unsplash.com/photo-1589571894960-20c64195103a",
    },
    content:
      "Enjoying a cup of coffee on a rainy morning. ☕ #coffeelover #relax",
    image: "https://images.unsplash.com/photo-1485098592591-95cdc990cd25",
    likes: 280,
    comments: 48,
  },
  {
    id: "8",
    user: {
      name: "Kevin Garcia",
      avatar: "https://images.unsplash.com/photo-1568602471122-78329ba345c6",
    },
    content: "Working on a new music project. 🎶 #music #artist",
    image: "https://images.unsplash.com/photo-1510915228340-29c85a3a6933",
    likes: 195,
    comments: 32,
  },
  {
    id: "9",
    user: {
      name: "Sophie Wilson",
      avatar: "https://images.unsplash.com/photo-1595152772839-295e1c183523",
    },
    content: "Visiting a beautiful art gallery today. 🎨 #art #culture",
    image: "https://images.unsplash.com/photo-1513364776144-60987148567f",
    likes: 245,
    comments: 40,
  },
  {
    id: "10",
    user: {
      name: "Omar Ali",
      avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    },
    content: "Just adopted a cute puppy! 🐶 #doglover #pet",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8",
    likes: 350,
    comments: 60,
  },
];

const PostItem = memo(({ item }: { item: Post }) => (
  <View style={styles.postContainer}>
    <View style={styles.postHeader}>
      <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
      <Text style={styles.userName}>{item.user.name}</Text>
    </View>

    <Text style={styles.content}>{item.content}</Text>

    {item.image && (
      <Image source={{ uri: item.image }} style={styles.postImage} />
    )}

    <View style={styles.actions}>
      <TouchableOpacity
        style={styles.actionButton}
        accessibilityLabel={`Like button with ${item.likes} likes`}
      >
        <Heart size={20} color="#666" />
        <Text style={styles.actionText}>{item.likes}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        accessibilityLabel={`Comment button with ${item.comments} comments`}
      >
        <MessageCircle size={20} color="#666" />
        <Text style={styles.actionText}>{item.comments}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.actionButton}
        accessibilityLabel="Share button"
      >
        <Share size={20} color="#666" />
      </TouchableOpacity>
    </View>
  </View>
));

export default function HomeScreen() {
  const renderPost: ListRenderItem<Post> = ({ item }) => (
    <PostItem item={item} />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <FlatList
        data={DUMMY_POSTS}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  postContainer: {
    backgroundColor: "#fff",
    marginBottom: 12,
    padding: 16,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 12,
  },
  postImage: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    marginBottom: 12,
  },
  actions: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
  },
  actionText: {
    marginLeft: 6,
    color: "#666",
    fontSize: 14,
  },
});
