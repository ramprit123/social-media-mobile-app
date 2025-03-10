import { SignInContent } from "@/contents/sign-in";
import { Text, View } from "react-native";

export default function SignUp() {
  return (
    <View className={SignInContent.tailwindClasses.container}>
      <Text className={SignInContent.tailwindClasses.text}>
        {SignInContent.text}
      </Text>
    </View>
  );
}
