import React, { useState } from 'react';
import { measuringRef } from '../../../config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View, StyleSheet, TextInput } from 'react-native';
import { color, opacity } from '../../../assets/styles/Styles';
// Components
import { ItemDropdown } from './ItemDropdown';
import { AnimationLoadingPrimary } from '../../animation/loading/AnimationLoadingPrimary';



export function ItemConsumption({ headerText, rowDropdown, moistureCounter, buttonStyle, buttonText, showModal, setShowModal }) {
    const navigation = useNavigation();
    
    const [loading, setLoading] = useState(false);

    const [selectedItem, setSelectedItem] = useState("");
    const [moistureFirst, setMoistureFirst] = useState("");

    const [showConsumption, setShowConsumption] = useState(true);

    // Function to format time as HH:mm
    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    // Save Measure
    const saveMeasuring = async () => {
        try {
            setLoading(true);
            const measureDocRef = doc(measuringRef);
            const consumptionType = showConsumption;

            await setDoc(measureDocRef, {
                measureId: measureDocRef.id,
                consumption: selectedItem,
                consumptionType: consumptionType,
                moistureFirst: moistureFirst,
                moistureLast: null,
                timeFirst: getCurrentTime(),
                timeLast: null
            });
            setLoading(false);
            navigation.navigate("Home");
        } catch(error) {
            console.log("Save Error:", error);
            setLoading(false);
        }
    };

    // Close Modal
    const closeModal = () => {
        setShowModal(false);
    };

    // Toggle between Drink and Food
    const toggleDrink = () => {
        setShowConsumption(true);
    };
    const toggleFood = () => {
        setShowConsumption(false);
    };

    // Dropdown Drink Data
    const drinkData = [
        { title: "Water", value: "Water" }, 
        { title: "Thee", value: "Thee" }, 
        { title: "Koffie", value: "Koffie" }, 
        { title: "Appelsap", value: "Appelsap" }, 
        { title: "Cola", value: "Cola" }, 
    ];

    // Dropdown Food Data
    const foodData = [
        { title: "Bannaan", value: "Bannaan" },
        { title: "Boterham met ham en kaas", value: "Boterham met ham en kaas" },
        { title: "Erwtensoep", value: "Erwtensoep" },
        { title: "Boerenkool", value: "Boerenkool" },
    ];

    return (
        <View className="rounded-md p-4 bg-primary">
            <Text className="mb-3 text-sm text-white" style={{ fontFamily: 'Montserrat_600SemiBold' }}>{headerText}</Text>
            <Image className="" style={{ tintColor: color.whiteColor }} source={require('./../../../assets/static/figure/figure_blocks_01.png')} />

            <View className="my-4">
                {showConsumption ? (
                    <>
                        <View className="flex-row justify-evenly items-center">
                            <View className="w-1/2 pr-1">
                                <View className="rounded-t-md py-2 bg-white">
                                    <Text className="text-sm text-center text-primary" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Drank</Text>
                                </View>
                            </View>

                            <View className="w-1/2 pl-1">
                                <TouchableOpacity onPress={toggleFood}>
                                    <View className="rounded-t-md py-2 bg-secondary-light">
                                        <Text className="text-sm text-center text-primary" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Voeding</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View className="rounded-b-md py-4 px-3 bg-white">
                            <Text className="mb-1 text-sm text-primary" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Wat voor drank consumeert u?</Text>
                            <ItemDropdown dropdownData={drinkData} 
                                        dropdownText="Kies uw drank"
                                        onItemSelect={setSelectedItem}/>

                            {rowDropdown &&
                                <View className="mt-4">
                                    <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Wat is de vochtinhoud van uw drank?</Text>
                                    <TextInput className="my-2 rounded-md py-2 px-3 text-gray bg-gray-light" style={{ fontFamily: 'Montserrat_600SemiBold' }}
                                                keyboardType="numeric"
                                                value={moistureFirst}
                                                onChangeText={setMoistureFirst}/>
                                </View>
                            }

                            {moistureCounter &&
                                <Text className="mt-7 mb-4 text-4xl text-center text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>00.0 ml</Text>
                            }

                            {loading ? (
                                <View className="items-center">
                                    <AnimationLoadingPrimary />
                                </View>
                            ) : (
                                <TouchableOpacity onPress={saveMeasuring} activeOpacity={opacity.opacity800}>
                                    <View className={`mt-3 rounded-md py-2 px-5 bg-secondary ${ buttonStyle ? 'self-center' : 'self-start'}`}>
                                        <Text className="text-sm text-white" style={{ fontFamily: 'Montserrat_600SemiBold' }}>{buttonText}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>
                    </>
                ) : (
                    <>
                        <View className="flex-row justify-evenly items-center">
                            <View className="w-1/2 pr-1">
                                <TouchableOpacity onPress={toggleDrink}>
                                    <View className="rounded-t-md py-2 bg-secondary-light">
                                        <Text className="text-sm text-center text-primary" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Drank</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View className="w-1/2 pl-1">
                                <View className="rounded-t-md py-2 bg-white">
                                    <Text className="text-sm text-center text-primary" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Voeding</Text>
                                </View>
                            </View>
                        </View>

                        <View className="rounded-b-md py-4 px-3 bg-white">
                            <Text className="mb-1 text-sm text-primary" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Wat voor voeding consumeert u?</Text>
                            <ItemDropdown dropdownData={foodData}
                                        dropdownText="Kies uw voeding"
                                        onItemSelect={setSelectedItem}/>

                            {rowDropdown &&
                                <View className="mt-4">
                                    <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Wat is de vochtinhoud van uw voeding?</Text>
                                    <TextInput className="my-2 rounded-md py-2 px-3 text-gray bg-gray-light" style={{ fontFamily: 'Montserrat_600SemiBold' }}
                                                keyboardType="numeric"
                                                value={moistureFirst}
                                                onChangeText={setMoistureFirst}/>
                                </View>
                            }

                            {moistureCounter &&
                                <Text className="mt-7 mb-4 text-4xl text-center text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>00.0 ml</Text>
                            }

                            {loading ? (
                                <View className="items-center">
                                    <AnimationLoadingPrimary />
                                </View>
                            ) : (
                                <TouchableOpacity onPress={saveMeasuring} activeOpacity={opacity.opacity800}>
                                    <View className={`mt-3 rounded-md py-2 px-5 bg-secondary ${ buttonStyle ? 'self-center' : 'self-start'}`}>
                                        <Text className="text-sm text-white" style={{ fontFamily: 'Montserrat_600SemiBold' }}>{buttonText}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>
                    </>
                )}
            </View>

            {showModal &&
                <View className="items-center mb-1">
                    <TouchableOpacity onPress={closeModal}>
                        <Text className="text-sm text-center text-white" style={{ fontFamily: 'Montserrat_500Medium' }}>Weging annuleren</Text>
                        <View className="border-b-[1px] border-white"></View>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}
