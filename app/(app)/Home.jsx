import {Button, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
// Components
import { LayoutBasic } from '../../components/layout/_layoutBasic';
import { ItemMeting } from '../../components/content/item/ItemMeting';
import { color } from '../../assets/styles/Styles';``
import {useState} from "react";
import * as Progress from 'react-native-progress';


export function Home() {
    const [consumed,setConsumed] = useState(0)      // Consumed state handler
    const [inputValue, setInputValue] = useState('') // Input state handler

    const variableCounter = () => (
        parseInt(inputValue, 10) || 0                   // Variable uses value from input
    )
    // Will parse strings into an integer and default to 0
    const increase = () => (
        (
            setConsumed(consumed + (variableCounter())
            )
        )
    )
    // Will change the Consumed state value
    // By incrementing it with the value of variableCounter

    const reset = () => (
        setConsumed(0)
    )                                                   // Will reset the Consumed state to 0


    return (
        <LayoutBasic>

            <View className="rounded-md w-full bg-gray-300">
                <Progress.Bar className={'-rotate-90'} style={{ alignSelf: 'center', borderRadius: 10 }} progress={consumed /1500} width={250} height={300}/>

                <Text className='self-center font-bold text-lg'>{consumed} / 1500</Text>

                <TextInput onChangeText={setInputValue} className='border-2 h-12 w-24 self-center rounded-2xl'/>

                <Button title={'Submit data'} onPress={increase} />
                <Button title={'Reset'} onPress={reset} />
            </View>

            <Button title={'test'} onPress={()=>console.log({consumed})} />
            <View className="my-2 p-3 rounded-md bg-primary">
                <View className="">
                    <Text className="text-base font-semibold text-white">Recente vochtinnames</Text>
                    <View className="mt-3">
                        <Image className="" source={require('./../../assets/static/figure/figure_blocks_01.png')}/>
                    </View>
                </View>

                <View className="">
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
