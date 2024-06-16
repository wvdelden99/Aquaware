import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
// Components
import { LayoutWelcome } from '../components/layout/_layoutWelcome';


export function Welcome() {
    const navigation = useNavigation();
    const selected = [true, false, false, false, false, false];

    return (
        <LayoutWelcome headerText="WELKOM"
                        animationText="Welkom op de AquaWare App!"
                        animationLottie={require('./../assets/static/animations/animation_heart_01.json')}
                        handleNext={() => navigation.navigate("WelcomeMeasure")}
                        selected={selected}>
            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>
                Welkom op de Aquaware app! AquaWare helpt u eenvoudig en nauwkeurig de hoeveelheid 
                vocht die u dagelijk inneemt te meten. Door het gewicht van uw vochtinname bij the houden, 
                ondersteunt Aquaware u bij het behouden van een optimale vochtbalans, essentieel voor uw gezonheid.
            </Text>
            <Text className="mt-4 text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>Laten we beginnen!</Text>
        </LayoutWelcome>
    )
}

export function WelcomeMeasure() {
    const navigation = useNavigation();
    const selected = [false, true, false, false, false, false];

    return (
        <LayoutWelcome headerText="WELKOM"
                        animationText="AquaWare 'tool'"
                        animationLottie={require('./../assets/static/animations/animation_scale_01.json')}
                        handlePrev={() => navigation.navigate("Welcome")}
                        handleNext={() => navigation.navigate("WelcomeManually")}
                        selected={selected}>
            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>
                Met behulp van de Aquaware weegschaal kunt u nauwkeurig het vochtgehalte van uw consumpties meten. 
                Heeft u een product niet volledig genuttigd? Geen probleem! Voer een tweede meeting uit en uw werkelijke 
                vochtinname wordt automatisch voor u berekend.
            </Text>
        </LayoutWelcome>
    )
}

export function WelcomeManually() {
    const navigation = useNavigation();
    const selected = [false, false, true, false, false, false];

    return (
        <LayoutWelcome headerText="WELKOM"
                        animationText="Handmatig vochtinname toevoegen"
                        animationLottie={require('./../assets/static/animations/animation_fill_01.json')}
                        handlePrev={() => navigation.navigate("WelcomeMeasure")}
                        handleNext={() => navigation.navigate("WelcomeRecommendations")}
                        selected={selected}>
            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>
                Bent u precies op de hoogte van het vochtgehalte van uw consumptie? Voer deze informatie dan handmatig in via 
                de Aquaware app. Doe dit echter alleen als u zeker bent van deze gegevens, zodat uw vochtinname zo nauwkeurig 
                moegelijk kunnen bijhouden.
            </Text>
        </LayoutWelcome>
    )
}

export function WelcomeRecommendations() {
    const navigation = useNavigation();
    const selected = [false, false, false, true, false, false];

    return (
        <LayoutWelcome headerText="WELKOM"
                        animationText="Bekijk uw aanbevelingen"
                        animationLottie={require('./../assets/static/animations/animation_list_01.json')}
                        handlePrev={() => navigation.navigate("WelcomeManually")}
                        handleNext={() => navigation.navigate("WelcomeTool")}
                        selected={selected}>
            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>
                Aan het einde van de dag ontvangt u een lijst met aanbevelingen. Deze zijn gebaseerd op uw recente vochtinnames en 
                kunnen als hulpmiddel dienen voor de volgende dag.
            </Text>
        </LayoutWelcome>
    )
}

export function WelcomeTool() {
    const navigation = useNavigation();
    const selected = [false, false, false, false, true, false];

    return (
        <LayoutWelcome headerText="WELKOM"
                        animationText="De tool gebruiken"
                        animationLottie={require('./../assets/static/animations/animation_shutter_01.json')}
                        handlePrev={() => navigation.navigate("WelcomeRecommendations")}
                        handleNext={() => navigation.navigate("WelcomeDone")}
                        selected={selected}>
            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>
                Draai de schijf om de opening van de weeg tool te verstellen. Maak de opening groter om er iets in te hangen. 
                Verstel de opening vervolgens zodat de opening strak op het voorwerp zit dat u wilt wegen. Nu kunt u aan het 
                handvat het geheel optillen.
            </Text>
        </LayoutWelcome>
    )
}

export function WelcomeDone() {
    const navigation = useNavigation();
    const selected = [false, false, false, false, false, true];

    return (
        <LayoutWelcome headerText="WELKOM"
                        animationText="Meten is weten"
                        animationLottie={require('./../assets/static/animations/animation_check_01.json')}
                        handlePrev={() => navigation.navigate("WelcomeTool")}
                        handleNext={() => navigation.navigate("WelcomeCalibration")}
                        selected={selected}>
            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>
                U bent klaar met de instructies. Door uw dagelijkse vochtinname te monitoren, zet u een belangrijke stap naar een 
                betere gezondheid. Blijf Aqauware gebruiken voor nauwkeurige metingen en houd uw vochtbalans onder controle.
            </Text>
        </LayoutWelcome>
    )
}

export function WelcomeCalibration() {
    const navigation = useNavigation();

    return (
        <LayoutWelcome headerText="WELKOM"
                        animationText="Uw eigen fles calibreren"
                        handleButton={() => navigation.navigate("Navbar")}
                        backgroundStyle
                        blocksStyle>
            <Text className="text-sm text-primary" style={{ fontFamily: 'Montserrat_500Medium' }}>
                Hang uw eigen fles, ongevuld, aan de tool en klik op de knop hieronder. Het gewicht van uw fles kunnen we op deze 
                manier van latere wegingen aftrekken, zodat we exact kunnen berekenen hoeveel vloeistof er in uw fles zit.
            </Text>
        </LayoutWelcome>
    )
}