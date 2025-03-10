import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="bg-[#0A090B] flex-auto">
      <View className="container">
        <View>
          <Text className="text-white text-[18px] leading-[22px] font-normal">
            Профиль
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
