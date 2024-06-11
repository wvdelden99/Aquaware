import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';


export function LayoutBasic({children}) {
    return (
        <SafeAreaView className="">
            <StatusBar barStyle="dark-content"/>

            <View className="absolute h-[100px] w-full bg-white"></View>
            <View className="items-center py-6 bg-white">
                <Text className="text-lg font-bold text-primary">MIJN VOCHTINAME</Text>
            </View>

            <ScrollView className="pt-6 px-4 bg-secondary-light">
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}
