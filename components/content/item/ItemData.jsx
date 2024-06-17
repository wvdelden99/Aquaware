import { useState } from 'react';
import * as Progress from 'react-native-progress';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { color, opacity } from '../../../assets/styles/Styles';
// Components
import { ModalData } from '../modal/ModalData';


export function ItemData({measureId, consumption, consumptionType, timeFirst, timeLast, moistureFirst, moistureLast, moistureRemaining}) {

    const [showData, setShowData] = useState(false);
    const [showModalData, setShowModalData] = useState(false);

    // Toggle Data
    const toggleData = () => {
        setShowData(!showData);
    };

    // Modal Data
    const openModalData = () => {
        setShowModalData(true);
    };

    // Progress Bar Percentage
    const moisturePercentage = (moistureLast / moistureFirst);

    return (
        <>
            <View className="pt-6 px-6">
                <View className="border-b-2 border-gray-light pb-6">
                    <View className="flex-row justify-between items-center">
                        <View className="flex-row items-center gap-4">
                            <View className="rounded-md p-2 bg-primary">
                                {consumptionType ? (
                                    <Image className="w-6 h-6" style={{ tintColor: color.whiteColor }} source={require('./../../../assets/static/icons/icon_drink_01.png')}/>
                                ) : (
                                    <Image className="w-6 h-6" style={{ tintColor: color.whiteColor }} source={require('./../../../assets/static/icons/icon_food_01.png')}/>
                                )}
                            
                            </View>
                            <Text className="text-base text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>{consumption}</Text>
                        </View>

                        <View className="flex-row items-center gap-2">
                            <Text className="text-sm text-gray" style={{ fontFamily: 'Montserrat_500Medium' }}>{moistureRemaining ? moistureRemaining : moistureFirst}ml</Text>
                            <TouchableOpacity onPress={toggleData}>
                                <Image className={`w-7 h-7 ${ showData ? 'rotate-180' : '' }`} style={{ tintColor: color.grayColor }} source={require('./../../../assets/static/icons/icon_arrow_down_01.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {showData && 
                        <View className="">
                            <View className="flex-row justify-evenly">
                                <View className="mt-3 pr-4 w-1/2">
                                    <View className="flex-row justify-between items-center my-3">
                                        <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>Meting 1</Text>
                                        <Text className="text-sm text-gray" style={{ fontFamily: 'Montserrat_500Medium' }}>{timeFirst}</Text>
                                    </View>

                                    <View className="border-[1px] border-primary rounded p-2 bg-primary">
                                        <Text className="text-sm text-center text-white" style={{ fontFamily: 'Montserrat_500Medium' }}>{moistureFirst}ml</Text>
                                    </View>
                                </View>

                                {moistureLast === null ? (
                                    <View className="mt-3 pl-4 w-1/2">
                                        <View className="flex-row justify-between items-center my-3">
                                           <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>Meting 2</Text>
                                           <Text className="text-sm text-gray" style={{ fontFamily: 'Montserrat_500Medium' }}>...</Text>
                                        </View>
           
                                        <TouchableOpacity onPress={openModalData} activeOpacity={opacity.opacity800}>
                                            <View className="border-[1px] border-primary rounded p-2">
                                                <Text className="text-sm text-center text-primart" style={{ fontFamily: 'Montserrat_500Medium' }}>Toevoegen +</Text>
                                            </View>
                                       </TouchableOpacity>
                                    </View>
                                ) : (
                                    <View className="mt-3 pl-4 w-1/2">
                                        <View className="flex-row justify-between items-center my-3">
                                            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>Meting 2</Text>
                                            <Text className="text-sm text-gray" style={{ fontFamily: 'Montserrat_500Medium' }}>{timeLast}</Text>
                                        </View>

                                        <TouchableOpacity onPress={openModalData} activeOpacity={opacity.opacity800}>
                                            <View className="border-[1px] border-primary rounded p-2">
                                                <Text className="text-sm text-center text-primart" style={{ fontFamily: 'Montserrat_500Medium' }}>{moistureLast}ml</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>

                            <View className="mt-4">
                                <Progress.Bar className="border-0 bg-secondary-light" borderRadius={30} width={null} height={12} color={color.primaryColor}
                                            progress={moisturePercentage} />
                            </View>
                        </View>
                    }
                </View> 
            </View>

            <ModalData measureId={measureId} consumption={consumption} timeFirst={timeFirst} timeLast={timeLast}
                        moistureFirst={moistureFirst} moistureLast={moistureLast}
                        showModalData={showModalData} setShowModalData={setShowModalData}/>
        </>
    )
}
