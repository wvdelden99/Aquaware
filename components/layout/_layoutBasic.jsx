import { SafeAreaView } from 'react-native';


export function LayoutBasic({children}) {
    return (
        <SafeAreaView className="">
            <View>
                
            </View>
            {children}
        </SafeAreaView>
    )
}
