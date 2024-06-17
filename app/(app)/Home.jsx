import { useEffect, useState } from 'react';
import { measuringRef } from '../../config/firebase';
import { onSnapshot, query } from 'firebase/firestore';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { color, opacity } from '../../assets/styles/Styles';
// Components
import { LayoutBasic } from './../../components/layout/_layoutBasic';
import { ItemTotal } from '../../components/content/item/ItemTotal';
import { ItemData } from '../../components/content/item/ItemData';
import { AnimationLoadingWhite } from '../../components/animation/loading/AnimationLoadingWhite';


export function Home() {

    const [loadingData, setLoadingData] = useState(false);
    const [unsubscribe, setUnsubscribe] = useState(null);

    const [measureData, setMeasureData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoadingData(true);

                const q = query(measuringRef);
                const unsub = onSnapshot(q, (querySnapshot) => {
                    const documents = [];
                    querySnapshot.forEach((doc) => {
                        documents.push({ ...doc.data(), measureId: doc.id });
                    });
                    setMeasureData(documents);
                    setLoadingData(false);
                });
                setUnsubscribe(() => unsub);
            } catch(error) {
                console.error("Fetch Error:", error);
                setLoadingData(false);
            }
        };

        fetchData();
        return () => {
            if (typeof unsubscribe === 'function') {
                unsubscribe();
            }
        };
    }, []);

    // Moisture Max
    const moistureMax = 1500;

    // Moisture Total
    const moistureTotal = measureData ? measureData.reduce((total, item) => {
        if (item.moistureLast !== null) {
            return total + (item.moistureFirst - item.moistureLast);
        }
        return total;
    }, 0) : 0;

    // Recommendations
    const drinkRecommendation = [{ name: "Water" }, { name: "Appelsap" }, { name: "Thee" }, { name: "Koffie" }];
    const foodRecommendation = [{ name: "Banaan" }, { name: "Boterham met ham en kaas" }, { name: "Erwtensoep" }];

    return (
        <LayoutBasic headerText="MIJN VOCHTINNAME">
            <ItemTotal moistureTotal={moistureTotal} moistureMax={moistureMax}/>

            <View className="my-6 rounded-md p-5 bg-primary">
                <View className="">
                    <Text className="mb-1 text-base text-white" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Recente vochtinnames</Text>
                    <Image className="" style={{ tintColor: color.whiteColor }} source={require('./../../assets/static/figure/figure_blocks_01.png')}/>
                </View>

                {loadingData ? (
                    <View className="items-center">
                        <AnimationLoadingWhite />
                    </View>
                ) : (
                    <View className="mt-6 mb-6 rounded-md bg-white">
                        <FlatList className=""
                        scrollEnabled={false}
                        data={measureData}
                        keyExtractor={item => item.measureId}
                        renderItem={({item}) => (
                            <ItemData measureId={item.measureId} consumption={item.consumption} consumptionType={item.consumptionType}
                                    timeFirst={item.timeFirst} timeLast={item.timeLast}
                                    moistureFirst={item.moistureFirst} moistureLast={item.moistureLast}
                                    moistureRemaining={item.moistureFirst - item.moistureLast}/>
                        )}/>
                   
                    </View>
                )}
            </View>

            <View className="rounded-md bg-primary">
                <TouchableOpacity onPress={{}} activeOpacity={opacity.opacity800}>
                    <View className="flex-row justify-between items-center py-4 pl-3 pr-6">
                        <Text className="text-sm text-white" style={{ fontFamily: 'Montserrat_600SemiBold' }}>
                            Waarom moet ik mijn vochtinname beperken?
                        </Text>
                        <View className="rounded-full bg-white">
                            <Image className="w-7 h-7" style={{ tintColor: color.primaryColor }} source={require('./../../assets/static/icons/icon_arrow_down_01.png')}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View className="mt-6 mb-24 -mx-4 py-8">
                <Image className="absolute w-full bg-cover" source={require('./../../assets/static/image/image_background_01.png')}/>

                <View className="mx-4 rounded-md px-3 pb-4 bg-white">
                    <View className="self-start -ml-3 rounded-tl-md rounded-br-md py-2 px-4 bg-secondary">
                        <Text className="text-sm text-white" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Aanbevelingen</Text>
                    </View>

                    <Text className="mt-5 max-w-[75%] text-sm text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>Uw maximaal aanbevolen vochtinname voor morgen is</Text>
                    <View className="self-start mt-3 mb-5 rounded-md py-1 px-2 bg-primary">
                        <Text className="text-sm text-white" style={{ fontFamily: 'Montserrat_500Medium' }}>1500 ml</Text>
                    </View>

                    <Image className="" style={{ tintColor: color.secondaryColor }} source={require('./../../assets/static/figure/figure_blocks_01.png')}/>
                    <Text className="mt-6 text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>
                        Dit is de hoeveelheid vocht die u wordt aangeraden te consumeren gedurende de dag.
                        Aan de hand van uw recente innames hebben wij aan aantal aanbevelingen voor u gedaan:
                    </Text>

                    <View className="flex-row mt-5">
                        <View className="pl-3 w-1/2">
                            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>Drank</Text>

                            <FlatList className="mt-3 mb-4"
                                    scrollEnabled={false}
                                    data={drinkRecommendation}
                                    keyExtractor={item => item.name}
                                    renderItem={({item}) => (
                                        <View className="flex-row items-center gap-3 max-w-[90%]">
                                            <View className="rounded-full w-1 h-1 bg-primary"></View>
                                            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>{item.name}</Text>
                                        </View>
                                    )}/>
                        </View>

                        <View className="w-1/2">
                            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_700Bold' }}>Voeding</Text>

                            <FlatList className="mt-4 mb-4"
                                    scrollEnabled={false}
                                    data={foodRecommendation}
                                    keyExtractor={item => item.name}
                                    renderItem={({item}) => (
                                        <View className="flex-row items-center gap-3 max-w-[90%]">
                                            <View className="rounded-full w-1 h-1 bg-primary"></View>
                                            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>{item.name}</Text>
                                        </View>
                                    )}/>
                        </View>
                    </View>
                </View>
            </View>
        </LayoutBasic>
    )
}
