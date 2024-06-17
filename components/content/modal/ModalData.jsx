import { useRef, useState } from 'react';
import { measuringRef } from '../../../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { opacity } from '../../../assets/styles/Styles';
import { AnimationLoadingPrimary } from '../../animation/loading/AnimationLoadingPrimary';


export function ModalData({measureId, consumption, timeFirst, timeLast, moistureFirst, moistureLast, showModalData, setShowModalData}) {

    const [loading, setLoading] = useState(false);

    const [moistureFirstValue, setMoistureFirstValue] = useState(moistureFirst);
    const [moistureLastValue, setMoistureLastValue] = useState(moistureLast);

    const [showEditLast, setShowEditLast] = useState(false);

    // Function to format time as HH:mm
    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    // Save Measurement
    const saveMeasuring = async () => {
        try {
            setLoading(true);
            const measureDocRef = doc(measuringRef, measureId);

            await updateDoc(measureDocRef, {
                moistureLast: moistureLastValue,
                timeLast: getCurrentTime()
            });

            setLoading(false);
            closeModalData();
        } catch(error) {
            console.log("Save Error:", error);
            setLoading(false);
        }
    };

    // Empty Moisture Field
    const moistureEmpty = moistureLast === null;

    // Textinput Pressable Area
    const inputRefs = useRef({});
    const focusInput = (inputName) => {
        inputRefs.current[inputName].focus();
    };

    // Edit Last
    const openEditLast = () => {
        console.log("press")
        setShowEditLast(true);  
    };

    // Modal Data
    const closeModalData = () => {
        setShowModalData(false);
    };

    return (
        <Modal visible={showModalData}
                transparent={true}
                animationType="fade">
            <View className="absolute w-full h-full bg-black opacity-50"></View>
            <View className="flex-[1] justify-center px-4">
                <View className="rounded-md p-4 bg-white">
                    <Text className="text-base text-primary" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Specificaties meting {consumption}</Text>

                    <View className="flex-row justify-evenly mt-10 mb-4">
                        <View className="w-1/2 pr-3">
                            <View className="flex-1 border-2 border-gray-light rounded-md pb-3">
                                <View className="rounded-t p-2 bg-primary">
                                    <Text className="text-sm text-center text-white" style={{ fontFamily: 'Montserrat_500Medium' }}>Meting 1</Text>
                                </View>
                                <View className="flex-1 justify-center">
                                    <View className="flex-row justify-evenly items-center mt-3 mb-2">
                                        <Text className="text-sm text-gray" style={{ fontFamily: 'Montserrat_500Medium' }}>{timeFirst}</Text>
                                        <TouchableOpacity onPress={() => focusInput('meting_1')} activeOpacity={opacity.opacity800}>
                                            <View className="flex-row items-center border-2 border-gray-light rounded py-1 px-3">
                                                <TextInput className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}
                                                            ref={(ref) => { inputRefs.current[('meting_1')] = ref; }}
                                                            value={moistureFirstValue}
                                                            onChangeText={setMoistureFirstValue}/>
                                                <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}> ml</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <Text className="px-1 text-xs text-center text-gray" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Pas indien nodig aan.</Text>
                                </View>
                            </View>
                        </View>

                        <View className="w-1/2 pl-3">
                            <View className="border-2 border-gray-light rounded-md pb-3">
                                <View className="rounded-t p-2 bg-primary">
                                    <Text className="text-sm text-center text-white" style={{ fontFamily: 'Montserrat_500Medium' }}>Meting 2</Text>
                                </View>

                                {(!showEditLast && moistureEmpty) ? (
                                    <View className="px-3">
                                        <TouchableOpacity onPress={{}} activeOpacity={opacity.opacity800}>
                                            <View className="mt-3 mb-1 border-2 border-secondary rounded-md py-[6px] bg-secondary">
                                                <Text className="text-sm text-center text-white" style={{ fontFamily: 'Montserrat_500Medium' }}>Start weging</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={openEditLast} activeOpacity={opacity.opacity800}>
                                            <View className="mt-1 border-2 border-gray-light rounded-md py-[6px]">
                                                <Text className="text-sm text-center text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>Zelf invoeren</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <>
                                    <View className={`flex-row items-center mt-3 mb-2 ${moistureEmpty ? 'justify-center' : 'justify-evenly'}`}>
                                        <Text className="text-sm text-gray" style={{ fontFamily: 'Montserrat_500Medium' }}>{timeLast}</Text>
                                        <TouchableOpacity onPress={() => focusInput('meting_2')} activeOpacity={opacity.opacity800}>
                                            <View className="flex-row items-center border-2 border-gray-light rounded py-1 px-3">
                                                <TextInput className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}
                                                            ref={(ref) => { inputRefs.current[('meting_2')] = ref; }}
                                                            value={moistureLastValue}
                                                            onChangeText={setMoistureLastValue}/>
                                                <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}> ml</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    {moistureEmpty ? (
                                        <>
                                            {loading ? (
                                                <View className="items-center">
                                                    <AnimationLoadingPrimary />
                                                </View>
                                            ) : (                           
                                            <TouchableOpacity onPress={saveMeasuring} activeOpacity={opacity.opacity800}>
                                                <View className="mt-1 mx-3 rounded-md py-2 px-3 bg-secondary">
                                                    <Text className="text-sm text-center text-white" style={{ fontFamily: 'Montserrat_500Medium' }}>Toevoegen</Text>
                                                </View>
                                            </TouchableOpacity>
                                            )}
                                        </>
                                    ) : ( 
                                         <Text className="px-1 text-xs text-center text-gray" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Pas indien nodig aan.</Text>
                                    )}
                                </>
                                )}
                            </View>
                        </View>
                    </View>

                    <View className="rounded-md pt-3 pb-4 px-2 bg-secondary-light">
                        <Text className="mb-1 text-sm text-primary" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Let op!</Text>
                        <Text className="text-xs text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>Er dient nog een tweede meting toegevoegd te worden voor {consumption}</Text>
                    </View>

                    <View className="items-center mt-4 mb-1">
                        <TouchableOpacity onPress={closeModalData}>
                            <Text className="text-sm text-center text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>Sluit dit scherm</Text>
                            <View className="border-b-[1px] border-primary"></View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Modal>
    )
}
