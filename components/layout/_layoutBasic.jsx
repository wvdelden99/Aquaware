import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';


export function LayoutBasic({children}) {
    return (
        <SafeAreaView className="">
            <StatusBar barStyle="light-content"/>

            <View className="absolute h-[100px] w-full bg-gray-400"></View>
            <View className="items-center py-6 bg-gray-400">
                <Text className="text-lg font-bold text-white">MIJN VOCHTBALANS</Text>
            </View>

            <ScrollView className="mt-6 px-6">
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}
