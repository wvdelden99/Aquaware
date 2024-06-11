import { Image, Text, TouchableOpacity, View } from 'react-native';
// Components
import { LayoutBasic } from '../../components/layout/_layoutBasic';
import { ItemData } from '../../components/content/item/ItemData';
import { ItemMeting } from '../../components/content/item/ItemMeting';
import { color } from '../../assets/styles/Styles';

export function Home() {
    return (
        <LayoutBasic>
            <ItemData />

            <View className="my-2 rounded-md bg-gray-300">
                <View className="items-center rounded-t-md p-2 bg-gray-400">
                    <Text className="text-base font-semibold text-white">Recente vochtinname</Text>
                </View>

                <View className="p-3">
                    <ItemMeting textDrink="Cola"
                                timeFirst="17:15"
                                timeLast="17:37"
                                moistureFirst="300"
                                moistureLast="10"/>
                    <ItemMeting textDrink="Thee"
                                timeFirst="17:15"
                                timeLast="17:37"
                                moistureFirst="175"
                                moistureLast="0"/>
                    <ItemMeting textDrink="Koffie"
                                timeFirst="17:15"
                                timeLast="17:37"
                                moistureFirst="125"
                                moistureLast="0"/>
                    <ItemMeting textDrink="Water"
                                timeFirst="17:15"
                                timeLast="17:37"
                                moistureFirst="230"
                                moistureLast="40"/>
                </View>
            </View>

            <View className="flex-row justify-between items-center my-2 rounded-md py-4 pl-3 pr-4 bg-gray-400">
                <View className="">
                    <Text className="text-base font-semibold text-white">Waarom moet ik mijn vochtinname beperken?</Text>
                </View>

                <TouchableOpacity onPress={{}}>
                    <Image className="w-8 h-8" style={{ tintColor: color.whiteColor}} source={require('./../../assets/static/icons/icon_arrow_down_03.png')}/>
                </TouchableOpacity>
            </View>

            <View className="my-2 rounded-md bg-gray-300">
                <View className="items-center rounded-t-md p-2 bg-gray-400">
                    <Text className="text-base font-semibold text-white">Aanbeveling</Text>
                </View>

                <View className="p-4">
                    <View className="flex-row justify-between py-2">
                        <View className="w-3/5 gap-2">
                            <Text className="text-sm font-medium">Uw maximaal aanbevolen vochtinname voor morgen is</Text>

                            <View className="self-start rounded-md py-1 px-2 bg-gray-400">
                                <Text className="text-sm font-medium text-white">1500 ml</Text>
                            </View>

                            <Text className="text-sm font-medium">Aan de hand van uw recente innames hebben wij een aantal aanbevelingen voor u gedaan:</Text>
                        </View>

                        <View className="w-2/5">
                            <Image className="w-[128px] h-[128px]" source={require('./../../assets/static/icons/icon_maat_beker_01.png')}/>
                        </View>
                    </View>
 
                    <View className="flex-wrap flex-row gap-2 my-2">
                        <View className="rounded-md py-2 w-[30%] bg-gray-400">
                            <Text className="text-sm text-center font-medium text-white">Water</Text>
                        </View>
                        <View className="rounded-md py-2 w-[30%] bg-gray-400">
                            <Text className="text-sm text-center font-medium text-white">Banaan</Text>
                        </View>
                        <View className="rounded-md py-2 w-[30%] bg-gray-400">
                            <Text className="text-sm text-center font-medium text-white">Boterham</Text>
                        </View>
                        <View className="rounded-md py-2 w-[30%] bg-gray-400">
                            <Text className="text-sm text-center font-medium text-white">Appel</Text>
                        </View>
                        <View className="rounded-md py-2 w-[30%] bg-gray-400">
                            <Text className="text-sm text-center font-medium text-white">Erwtensoep</Text>
                        </View>
                        <View className="rounded-md py-2 w-[30%] bg-gray-400">
                            <Text className="text-sm text-center font-medium text-white">Milkshake</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View className="mb-40"></View>
        </LayoutBasic>
    )
}
