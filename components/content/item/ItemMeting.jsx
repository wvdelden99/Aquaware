import { useState } from 'react';
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { color, opacity } from '../../../assets/styles/Styles';


export function ItemMeting({textDrink, timeFirst, timeLast, moistureFirst, moistureLast}) {

    const moistureTotal = moistureFirst - moistureLast;

    const [showModalData, setShowModalData] = useState(false);
    const [showEditData, setShowEditData] = useState(false);

    // Modal
    const openModalData = () => {
        setShowModalData(true);
    };
    const closeModalData = () => {
        setShowModalData(false);
    };

    // Edit Data
    const editData = () => {
        setShowEditData(!showEditData);
    }

    return (
        <>
        <TouchableOpacity onPress={openModalData} activeOpacity={opacity.opacity800}>
            <View className="my-2 rounded bg-white">
                <View className="p-3">
                    <View className="self-start rounded-md py-1 px-6 bg-primary">
                        <Text className="text-sm font-medium text-white">{textDrink}</Text>
                    </View>
                </View>

                <View className="flex-row justify-evenly border-t-2 border-gray-light mx-3 py-3">
                    <View className="border-r-2 border-gray-light pr-3 w-1/2">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-sm font-semibold text-primary">Meting 1</Text>
                            <Text className="text-sm font-medium text-gray-400">{timeFirst}</Text>
                        </View>
                        <View className="self-start my-1 border-2 border-gray-light rounded-md py-1 px-4">
                            <Text className="text-sm text-center text-primary">{moistureFirst} ml</Text>
                        </View>
                    </View>

                    <View className="pl-3 w-1/2">
                        <View className="flex-row justify-between items-center">
                            <Text className="text-sm font-semibold text-primary">Meting 1</Text>
                            <Text className="text-sm font-medium text-gray-400">{timeLast}</Text>
                        </View>
                        <View className="self-start my-1 border-2 border-gray-light rounded-md py-1 px-4">
                            <Text className="text-sm text-center text-primary">{moistureLast} ml</Text>
                        </View>
                    </View>
                </View>

                <View className="pb-3 px-3">
                    <View className="rounded-full w-full h-3 bg-secondary"></View>
                </View>
            </View>
        </TouchableOpacity>

        <Modal visible={showModalData}
                transparent={true}
                animationType='fade'>
            <View className="absolute w-full h-full bg-black opacity-50"></View>
            <View className="flex-[1] justify-center px-4">
                <View className="rounded-md p-3 bg-white">
                    <View className="">
                        <Text className="text-base font-bold text-primary">Specificatie van Meting</Text>
                        <View className="mt-3 mb-1">
                            <Image className="" style={{ tintColor: color.secondaryColor }} source={require('./../../../assets/static/figure/figure_blocks_01.png')}/>
                        </View>
                    </View>

                    <View className="flex-row justify-evenly my-3">
                        <View className="w-1/2 pr-2">
                            <View className="border-2 border-gray-light rounded">
                                <View className="rounded-t py-2 bg-primary">
                                    <Text className="text-sm text-center font-semibold text-white">Meting 1</Text>
                                </View>
                                <View className="my-3">
                                    <View className="flex-row justify-evenly items-center">
                                        <Text className="text-sm font-medium text-gray-400">{timeFirst}</Text>
                                        <TextInput className="border-2 border-gray-light rounded-md py-1 px-4 text-primary"
                                                    value={moistureFirst}/>
                                    </View>
                                    <View className="pt-3 px-2">
                                        <Text className="text-[13px] font-semibold text-gray-400">Pas indien nodig aan.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
   
                        <View className="w-1/2 pl-2">
                            <View className="border-2 border-gray-light rounded">
                                <View className="rounded-t py-2 bg-primary">
                                    <Text className="text-sm text-center font-semibold text-white">Meting 2</Text>
                                </View>
                                <View className="my-3">
                                    <View className="flex-row justify-evenly items-center">
                                        <Text className="text-sm font-medium text-gray-400">{timeLast}</Text>
                                        <TextInput className="border-2 border-gray-light rounded-md py-1 px-4 text-primary"
                                                    value={moistureLast}/>
                                    </View>
                                    <View className="pt-3 px-2">
                                        <Text className="text-[13px] font-semibold text-gray-400">Pas indien nodig aan.</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="my-2 rounded bg-secondary-light p-3">
                        <Text className="mb-1 text-sm font-semibold text-primary">Let op!</Text>
                        <Text className="text-sm text-primary">Er dient nog een tweede meting toegevoegd te worden voor {textDrink}.</Text>
                    </View>

                    <View className="items-center mt-3 mb-2">
                        <TouchableOpacity onPress={closeModalData} activeOpacity={opacity.opacity800}>
                            <Text className="text-sm text-center font-medium text-primary">Sluit dit scherm</Text>
                            <View className="border-t-[1px] border-primary"></View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
        </>
    )
}
