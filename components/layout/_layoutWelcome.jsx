import LottieView from 'lottie-react-native';
import { Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { color, opacity } from "../../assets/styles/Styles";

export function LayoutWelcome({children, headerText, animationText, animationLottie, selected, handlePrev, handleNext, handleButton, backgroundStyle, blocksStyle}) {

    return (
        <SafeAreaView className="flex-[1] bg-white">
            <StatusBar barStyle="dark-content"/>

            <View className="absolute h-[100px] w-full bg-white"></View>
            <View className="items-center py-6 bg-white">
                <Text className="text-lg font-bold text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>{headerText}</Text>
            </View>

            <View className={`pt-8 pb-5 px-4 ${ backgroundStyle ? 'bg-primary' : 'bg-secondary-light-alt' }`}>
                <View className="rounded-md p-3 bg-white">
                    <Text className="text-base text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>{animationText}</Text>

                    <View className="pt-9 pb-6 items-center">
                        {animationLottie ? (
                        <LottieView source={animationLottie}
                                    style={{ width: 168, height: 168 }} 
                                    autoPlay
                                    loop />
                        ) : (
                            <Image className="-mt-1 mb-2 ml-8 w-[180px] h-[180px]" source={require('./../../assets/static/figure/figure_aquaware_01.png')}/>
                        )}
                    </View>
                </View>

                <View className="self-end -mt-[3px] mr-6 -z-10">
                    <Image className="" style={{ tintColor: blocksStyle ? color.secondaryLightAltColor : color.secondaryLightColor }} source={require('./../../assets/static/figure/figure_blocks_02.png')}/>
                </View>
            </View>

            <View className="flex-[1]">
                <View className="py-12 px-6">
                    {children}
                </View>

                <View className="absolute self-center px-4 bottom-9">
                    {selected ? (
                        <View className="flex-row items-center w-full">
                            <View className="flex-1">
                                {handlePrev &&
                                    <TouchableOpacity onPress={handlePrev} activeOpacity={opacity.opacity800}>
                                        <View className="flex-row items-center">
                                            <Image className="rotate-90 w-8 h-8" source={require('./../../assets/static/icons/icon_arrow_down_01.png')}/>
                                            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>Vorige</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                            </View>

                            <View className="flex-1 flex-row justify-center items-center gap-2 mx-auto">
                                <View className={`w-2 h-2 ${ selected[0] ? 'bg-primary' : 'bg-gray-light'}`}></View>
                                <View className={`w-2 h-2 ${ selected[1] ? 'bg-primary' : 'bg-gray-light'}`}></View>
                                <View className={`w-2 h-2 ${ selected[2] ? 'bg-primary' : 'bg-gray-light'}`}></View>
                                <View className={`w-2 h-2 ${ selected[3] ? 'bg-primary' : 'bg-gray-light'}`}></View>
                                <View className={`w-2 h-2 ${ selected[4] ? 'bg-primary' : 'bg-gray-light'}`}></View>
                                <View className={`w-2 h-2 ${ selected[5] ? 'bg-primary' : 'bg-gray-light'}`}></View>
                            </View>

                            <View className="flex-1 items-end">
                                {handleNext &&
                                    <TouchableOpacity onPress={handleNext} activeOpacity={opacity.opacity800}>
                                        <View className="flex-row items-center">
                                            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>{ selected[5] ? 'Klaar' : 'Volgende'}</Text>
                                            <Image className="-rotate-90 w-8 h-8" style={{ tintColor: color.primaryColor }} source={require('./../../assets/static/icons/icon_arrow_down_01.png')}/>
                                        </View>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                    ) : (
                        <View className="">
                            <TouchableOpacity onPress={handleButton} activeOpacity={opacity.opacity800}>
                                <View className="rounded-md py-2 px-5 bg-primary">
                                    <Text className="text-sm text-white" style={{ fontFamily: 'Montserrat_500Medium' }}>Start calibratie</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </SafeAreaView>
    )
}