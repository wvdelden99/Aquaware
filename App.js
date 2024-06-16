import { useFonts, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
// Components
import { Navigation } from './components/navigation/Navigation';

export default function App() {

    let [fontsLoaded] = useFonts({
        // Montserrat
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Navigation />
    );
}

