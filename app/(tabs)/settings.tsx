import { Link } from "expo-router";
import { Text, SafeAreaView, Button } from "react-native";

export default function Settings() {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
      <Link href={"/accountinfo"}>
        <Text>Click Me</Text>
      </Link>
    </SafeAreaView>
  );
}
