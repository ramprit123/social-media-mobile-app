import { useUser } from "@clerk/clerk-expo";
import { useAuth } from "@clerk/clerk-react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { user } = useUser();
  const { signOut } = useAuth();
  return (
    <View>
      <Text>
        Welcome to Index
        {user?.fullName}
      </Text>
      <TouchableOpacity onPress={() => signOut()}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
