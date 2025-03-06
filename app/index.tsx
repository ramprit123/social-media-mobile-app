import "../global.css";
// ... rest of your imports and code

import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-slate-800 text-2xl font-bold underline">Hello Tailwind!</Text>
    </View>
  );
}
