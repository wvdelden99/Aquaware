import * as Progress from 'react-native-progress';
import { Image, Text, View } from 'react-native';
import { color } from '../../../assets/styles/Styles';


export function ItemTotal({moistureTotal, moistureMax}) {

    // Values for moisture
    const fillPercentage = ((moistureMax - moistureTotal) / moistureMax) * 100;
    const moistureAvailable = moistureMax - moistureTotal;

    return (
        <View className="rounded-md pb-5 px-4 bg-white">
            <View className="self-start -ml-4 rounded-tl-md rounded-br-md py-2 px-3 bg-secondary">
                <Text className="text-sm text-white" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Vochtinname</Text>
            </View>

            <View className="my-6">
                <View className="absolute h-full left-10 z-10">
                    <View className="flex-row self-end items-center top-[20%]">
                        <Text className="mr-2 text-sm text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>{moistureMax} ml</Text>
                        <Image className="" style={{ tintColor: color.secondaryColor }} source={require('./../../../assets/static/figure/figure_line_01.png')}/>
                    </View>
                    <View className="flex-row self-end items-center" style={{ top: `${fillPercentage}%` }}>
                        <Text className="mr-2 text-sm text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>{moistureTotal} ml</Text>
                        <Image className="" style={{ tintColor: color.secondaryColor }} source={require('./../../../assets/static/figure/figure_line_02.png')}/>
                    </View>
                </View>

                <View className="self-end mr-2 w-[200px] h-[180px]">
                    <Image className="w-[200px] h-[180px]" style={{ tintColor: color.primaryColor }} source={require('./../../../assets/static/figure/figure_maatbeker_01.png')}/>

                    <View className="absolute -rotate-90 bottom-5 -z-10">
                        <Progress.Bar borderWidth={0} borderRadius={20} width={180} height={140} color={color.secondaryLightColor}
                                    progress={moistureTotal / moistureMax} />
                    </View>
                </View>
            </View>

            <View className="">
                <Image className="" style={{ tintColor: color.secondaryColor }} source={require('./../../../assets/static/figure/figure_blocks_01.png')}/>
                <Text className="mt-2 mb-1 text-base text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>U kunt nog {moistureAvailable} ml vocht innemen.</Text>
                <Text className="text-base text-gray" style={{ fontFamily: 'Montserrat_500Medium' }}>Laatst bijgewerkt: 17:37</Text>
            </View>

            <Image className="absolute bottom-0 right-0" style={{ tintColor: color.secondaryLightColor }}  source={require('./../../../assets/static/figure/figure_rectangle_01.png')}/>
        </View>
    )
}