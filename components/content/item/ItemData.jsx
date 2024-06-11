import {Button, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import * as Progress from 'react-native-progress';


export function ItemData() {
    const [consumed,setConsumed] = useState(0)
    const [inputValue, setInputValue] = useState('')

    const variableCounter = () => (
        parseInt(inputValue, 10) || 0
    )
    const increase = () => (
        (
            setConsumed(consumed + (variableCounter())
            )
        )
    )


    const reset = () => (
        setConsumed(0)
    )


    return (

        <View className="rounded-md w-full bg-gray-300">
            <Progress.Bar style={{ alignSelf: 'center', borderRadius: 10 }} progress={consumed /1500} width={250} height={300}/>

            <Text className='self-center font-bold text-lg'>{} / 1500</Text>

            <TextInput onChangeText={setInputValue} className='border-2 h-12 w-24 self-center rounded-2xl'/>

            <Button title={'Submit data'} onPress={increase} />
            <Button title={'Reset'} onPress={reset} />
        </View>

    )
}

export default ItemData;