import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import { color, opacity } from '../../../assets/styles/Styles';
import { ItemDropdown } from './ItemDropdown';

export function ItemConsumption({ headerText, rowDropdown, moistureCounter, buttonStyle, buttonText, showModal, setShowModal }) {
    const [showConsumption, setShowConsumption] = useState(true);
    const [selectedDrink, setSelectedDrink] = useState("");

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
        { title: "Water" }, 
        { title: "Thee" }, 
        { title: "Koffie" }, 
        { title: "Appelsap" }, 
        { title: "Cola" }, 
    ];

    // Dropdown Food Data
    const foodData = [
        { title: "Bannaan" }, 
        { title: "Boterham met ham en kaas" }, 
        { title: "Erwtensoep" }, 
        { title: "Boerenkool" }, 
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
                                        dropdownText="Kies uw drank"/>

                            {rowDropdown &&
                                <View className="mt-4">
                                    <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Wat is de vochtinhoud van uw drank?</Text>
                                    <ItemDropdown />
                                </View>
                            }

                            {moistureCounter &&
                                <Text className="mt-7 mb-4 text-4xl text-center text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>00.0 ml</Text>
                            }

                            <TouchableOpacity onPress={{}} activeOpacity={opacity.opacity800}>
                                <View className={`mt-3 rounded-md py-2 px-5 bg-secondary ${ buttonStyle ? 'self-center' : 'self-start'}`}>
                                    <Text className="text-sm text-white" style={{ fontFamily: 'Montserrat_600SemiBold' }}>{buttonText}</Text>
                                </View>
                            </TouchableOpacity>
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
                                        dropdownText="Kies uw voeding"/>

                            {rowDropdown &&
                                <View className="mt-4">
                                    <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Wat is de vochtinhoud van uw voeding?</Text>
                                    <ItemDropdown />
                                </View>
                            }

                            {moistureCounter &&
                                <Text className="mt-7 mb-4 text-4xl text-center text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>00.0 ml</Text>
                            }

                            <TouchableOpacity onPress={{}} activeOpacity={opacity.opacity800}>
                                <View className={`mt-3 rounded-md py-2 px-5 bg-secondary ${ buttonStyle ? 'self-center' : 'self-start'}`}>
                                    <Text className="text-sm text-white" style={{ fontFamily: 'Montserrat_600SemiBold' }}>{buttonText}</Text>
                                </View>
                            </TouchableOpacity>
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
