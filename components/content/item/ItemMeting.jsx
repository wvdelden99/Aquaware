import { useState } from 'react';
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';


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
        <TouchableOpacity onPress={openModalData}>
            <View className="my-2">
                <View className="flex-row justify-between items-center rounded-t-md p-2 bg-gray-400">
                    <View className="flex-row items-center gap-1 ">
                        <Image className="w-4 h-4" source={require('./../../../assets/static/icons/icon_drink_01.png')}/>
                        <Text className="text-sm font-semibold text-white">{textDrink}</Text>
                    </View>

                    <Text className="text-sm font-semibold text-white">U heeft {moistureTotal} ml {textDrink} ingenomen</Text>
                </View>

                <View className="flex-row justify-between rounded-b-md p-3 bg-white">
                    <View className="flex-row justify-between  w-1/2">
                        <View className="">
                            <Text className="text-sm font-semibold">Meting 1</Text>
                            <Text className="text-sm font-regular">{timeFirst}</Text>
                        </View>

                        <View className="justify-center mx-auto">
                            <View className="rounded-md p-1 bg-gray-200">
                                <Text className="text-sm font-medium">{moistureFirst} ml</Text>
                            </View>
                        </View>
                    </View>

                    <View className="flex-row justify-between border-l-[1px] border-black w-1/2">
                        <View className="mx-auto">
                            <Text className="text-sm font-semibold">Meting 2</Text>
                            <Text className="text-sm font-regular">{timeLast}</Text>
                        </View>

                        <View className="justify-center">
                            <View className="rounded-md p-1 bg-gray-200">
                                <Text className="text-sm font-medium">{moistureLast} ml</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

        <Modal visible={showModalData}
                transparent={true}>
            <View className="flex-[1] justify-center px-6">
                <View className="items-center rounded-t-md p-2 bg-gray-400">
                    <Text className="text-base font-semibold text-white">Specificatie van Meting</Text>
                </View>

                <View className="rounded-b-md p-4 bg-white">
                    <View className="flex-row justify-evenly">
                        <View className="mr-2 w-1/2">
                            <View className="rounded-t-md p-2 bg-gray-400">
                                <Text className="text-sm text-center font-semibold text-white">Meting 1</Text>
                            </View>

                            <View className="flex-row justify-between items-center rounded-b-md p-4 bg-gray-200">
                                {showEditData ? (
                                    <View className="w-full">
                                        <TouchableOpacity onPress={editData}>
                                            <View className="rounded-md p-2 bg-gray-800">
                                                <TextInput classsName="text-xs font-medium text-white" 
                                                            placeholder="Voer Meting Uit"
                                                            placeholderTextColor="#FFF"/>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <>
                                    <View className="">
                                        <Text className="text-sm font-regular">{timeFirst}</Text>
                                    </View>

                                    <TouchableOpacity onPress={editData}>
                                        <View className="flex-row rounded-md py-1 px-2 bg-white">
                                            <Text className="text-sm text-dark">{moistureFirst} ml</Text>
                                        </View>
                                    </TouchableOpacity>
                                    </>
                                )}
                            </View>
                        </View>

                        <View className="ml-2 w-1/2">
                            <View className="rounded-t-md p-2 bg-gray-400">
                                <Text className="text-sm text-center font-semibold text-white">Meting 1</Text>
                            </View>

                            <View className="flex-row justify-between items-center rounded-b-md p-4 bg-gray-200">
                                {showEditData ? (
                                    <View className="w-full">
                                        <TouchableOpacity onPress={editData}>
                                            <View className="rounded-md p-2 bg-gray-800">
                                                <TextInput classsName="text-xs font-medium text-white" 
                                                            placeholder="Voer Meting Uit"
                                                            placeholderTextColor="#FFF"/>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <>
                                    <View className="">
                                        <Text className="text-sm font-regular">{timeLast}</Text>
                                    </View>

                                    <TouchableOpacity onPress={editData}>
                                        <View className="flex-row rounded-md py-1 px-2 bg-white">
                                            <Text className="text-sm text-dark">{moistureLast} ml</Text>
                                        </View>
                                    </TouchableOpacity>
                                    </>
                                )}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
        </>
    )
}
