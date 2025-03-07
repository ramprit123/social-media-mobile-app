import { tokenCache } from "@/cache";
import { ClerkProvider } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  // Validate environment variable
  if (!publishableKey) {
    throw new Error(
      "Missing EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY environment variable"
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-slate-900">
        <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
          <Stack
            screenOptions={{
              headerShown: false,
              animation: "slide_from_right",
              contentStyle: {
                backgroundColor: "transparent",
              },
            }}
          >
            <Stack.Screen
              name="index"
              options={{
                title: "Home",
              }}
            />
            <Stack.Screen
              name="sign-in"
              options={{
                title: "Sign In",
                contentStyle: { backgroundColor: "white" },
                presentation: "modal",
              }}
            />
          </Stack>
        </ClerkProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
