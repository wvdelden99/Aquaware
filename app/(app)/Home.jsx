import { Text, View } from 'react-native';
// Components
import { LayoutBasic } from '../../components/layout/_layoutBasic';
import { ItemData } from '../../components/content/item/ItemData';
import { ItemMeting } from '../../components/content/item/ItemMeting';

export function Home() {
    return (
        <LayoutBasic>
            <ItemData />

            <View className="my-6 rounded-t-md bg-gray-300">
                <View className="items-center rounded-t-md p-2 bg-gray-400">
                    <Text className="text-base font-semibold text-white">Recente vochtinname</Text>
                </View>

                <View className="py-6 px-3">
                    <ItemMeting />
                </View>
            </View>
        </LayoutBasic>
    )
}
