import { Redirect } from "expo-router";
import "../global.css";
import { useAuth } from "@clerk/clerk-expo";

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();
  // Wait for auth to be loaded before rendering
  if (!isLoaded) {
    return null;
  }
  // Check authentication status
  if (!isSignedIn) {
    return <Redirect href="/sign-in" />;
  }
  return <Redirect href={"/(tabs)"} />;
}
