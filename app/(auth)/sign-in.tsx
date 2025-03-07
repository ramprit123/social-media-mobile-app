import { useSSO } from "@clerk/clerk-expo";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const { startSSOFlow } = useSSO();
  const handlePrivacyPress = () => {
    WebBrowser.openBrowserAsync("YOUR_PRIVACY_POLICY_URL");
  };

  const handleGoogleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
      });
      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.error("Error occured", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white px-5">
      <View className="mb-10">
        <Image
          source={require("../../assets/images/react-logo.png")}
          className="w-36 h-36 resize-contain"
          resizeMode="cover"
        />
      </View>

      <TouchableOpacity className="button" onPress={handleGoogleLogin}>
        <Image
          source={require("../../assets/images/react-logo.png")}
          className="w-6 h-6 mr-2"
          resizeMode="cover"
        />
        <Text className="text-white text-base font-bold">
          Login with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="absolute bottom-5"
        onPress={handlePrivacyPress}
      >
        <Text className="text-blue-600 underline">Privacy Policy</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
