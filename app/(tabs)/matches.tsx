import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Matches = () => {
  return (
    <SafeAreaView className="bg-[#0A090B] flex-auto">
      <View className="container">
        <View>
          <Text className="text-white text-[18px] leading-[22px] font-normal">
            Матчи
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Matches;
