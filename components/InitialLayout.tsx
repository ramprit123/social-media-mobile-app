import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";

export function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segment = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    const isAuthScreen = segment[0] === "(auth)";
    if (!isSignedIn && !isAuthScreen) return router.push("/(auth)/sign-in");
    else if (isSignedIn && isAuthScreen) return router.push("/(tabs)");
    return () => {};
  }, [isLoaded, isSignedIn, segment]);

  return <Stack screenOptions={{ headerShown: false }} />;
}
