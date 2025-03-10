import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default () => {
  return (
    <SafeAreaView className="bg-black flex-1 justify-center items-center">
      <View>
        <Text className="text-white">Главная</Text>
      </View>
    </SafeAreaView>
  );
};
