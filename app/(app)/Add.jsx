import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { color, opacity } from '../../assets/styles/Styles';
// Components
import { LayoutBasic } from '../../components/layout/_layoutBasic';
import { ModalAdd } from '../../components/content/modal/ModalAdd';
import { ItemConsumption } from '../../components/content/item/ItemConsumption';


export function Add() {

    const [showModalAdd, setShowModalAdd] = useState(false);
    
    // Modal Add
    const openModalAdd = () => {
        setShowModalAdd(true);
    };

    return (
        <LayoutBasic headerText="VOCHTINNAME TOEVOEGEN">
            <View className="mb-6 rounded-md py-4 px-3 bg-white">
                <Text className="text-base text-primary" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Meten is weten</Text>
                <Image className="mt-3 mb-4" style={{ tintColor: color.secondaryColor }} source={require('./../../assets/static/figure/figure_blocks_01.png')}/>
                <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>
                    Weet u niet zeker hoeveel vocht er in uw consumptie zit? Gebruik de Aqauware 
                    weegschaal, zodat er een nauwkeurige weging toegevoegd kan worden.
                </Text>
                <TouchableOpacity onPress={openModalAdd} activeOpacity={opacity.opacity800}>
                    <View className="self-start mt-5 mb-1 rounded-md py-2 px-4 bg-secondary">
                        <Text className="text-sm text-white" style={{ fontFamily: 'Montserrat_600SemiBold' }}>Start nieuwe weging</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View className="mb-32">
                <ItemConsumption headerText="Handmatig vochtinname toevoegen"
                                rowDropdown
                                buttonText="Voeg nieuwe vochtinname toe"/>
            </View>

            <ModalAdd showModalAdd={showModalAdd} setShowModalAdd={setShowModalAdd}/>
        </LayoutBasic>
    )
}