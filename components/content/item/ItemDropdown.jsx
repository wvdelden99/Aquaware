import SelectDropdown from 'react-native-select-dropdown';
import { Image, Text, View } from 'react-native';
import { color } from '../../../assets/styles/Styles';


export function ItemDropdown({dropdownData, dropdownText}) {
    return (
        <View className="my-2">
            <SelectDropdown
                data={dropdownData}
                renderButton={(selectedItem) => {
                    return (
                        <>
                            <View className="flex-row justify-between items-center rounded-md py-1 px-3 bg-gray-light">
                                <Text className="text-sm text-gray" style={{ fontFamily: 'Montserrat_600SemiBold' }}>{(selectedItem && selectedItem.title) || dropdownText} </Text>
                                <View className="rounded-full bg-white">
                                    <Image className="w-7 h-7" style={{ tintColor: color.primaryColor }} source={require('./../../../assets/static/icons/icon_arrow_down_01.png')}/>
                                </View>
                            </View>
                        </>
                    );
                }}
                renderItem={(item, isSelected) => {
                    return (
                        <>
                        <View className={`items-start py-2 px-3 ${isSelected ? 'bg-gray-light' : ''}`}>
                            <Text className="text-sm text-black" style={{ fontFamily: 'Montserrat_600SemiBold' }}>{item.title}</Text>
                        </View>
                        </>
                    );
                }}
                showsVerticalScrollIndicator={false}
                dropdownStyle={{ borderRadius: 4 }}
            />
        </View>
    )
}
