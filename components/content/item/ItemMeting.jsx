import { Image, Text, View } from 'react-native';


export function ItemMeting() {
    return (
        <View className="">
            <View className="flex-row justify-between items-center rounded-t-md py-1 px-2 bg-gray-400">
                <View className="flex-row items-center">
                    <Image className=""/>
                    <Text className="text-sm font-semibold text-white">Cola</Text>
                </View>

                <Text className="text-sm font-semibold text-white">U heeft 290 ml cola ingenomen</Text>
            </View>

            <View className="rounded-b-md">
                
            </View>
        </View>
    )
}
