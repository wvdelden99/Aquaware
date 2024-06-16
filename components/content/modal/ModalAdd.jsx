import { Image, Modal, Text, View } from 'react-native';
import { ItemConsumption } from '../item/ItemConsumption';


export function ModalAdd({showModalAdd, setShowModalAdd}) {

    // Modal Add
    const closeModalAdd = () => {
        setShowModalAdd(false);
    };

    return (
        <Modal visible={showModalAdd}
                transparent={true}
                animationType="fade">
            <View className="absolute w-full h-full bg-black opacity-50"></View>
            <View className="flex-[1] justify-center px-4">
                <ItemConsumption headerText="Start nieuwe weging"
                                moistureCounter
                                buttonText="Start weging"
                                buttonStyle
                                showModal={showModalAdd} setShowModal={setShowModalAdd}/>
            </View>
        </Modal>
    )
}
