import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from '../../assets/styles/Styles';
// Views
import { Welcome, WelcomeMeasure, WelcomeManually, WelcomeRecommendations, WelcomeTool, WelcomeDone, WelcomeCalibration } from '../../app/Welcome';

import { Home } from '../../app/(app)/Home';
import { Add } from '../../app/(app)/Add';
import { User } from '../../app/(app)/User';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const WelcomeStack = createStackNavigator();

export function Introduction() {
    return (
        <WelcomeStack.Navigator screenOptions={{ headerShown: false }}>
            <WelcomeStack.Screen name="Welcome" component={Welcome}></WelcomeStack.Screen>
            <WelcomeStack.Screen name="WelcomeMeasure" component={WelcomeMeasure}></WelcomeStack.Screen>
            <WelcomeStack.Screen name="WelcomeManually" component={WelcomeManually}></WelcomeStack.Screen>
            <WelcomeStack.Screen name="WelcomeRecommendations" component={WelcomeRecommendations}></WelcomeStack.Screen>
            <WelcomeStack.Screen name="WelcomeTool" component={WelcomeTool}></WelcomeStack.Screen>
            <WelcomeStack.Screen name="WelcomeDone" component={WelcomeDone}></WelcomeStack.Screen>
            <WelcomeStack.Screen name="WelcomeCalibration" component={WelcomeCalibration}></WelcomeStack.Screen>
        </WelcomeStack.Navigator>
    )
}

export function Navbar() {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
                const iconColor = focused ? color.secondaryColor : color.primaryColor;
                let iconComponent;

                if (route.name === 'Home') {
                    iconComponent = require('./../../assets/static/icons/icon_meter_01.png');
                } else if (route.name === 'Add') {
                    iconComponent = require('./../../assets/static/icons/icon_add_01.png');
                } else if (route.name === 'User') {
                    iconComponent = require('./../../assets/static/icons/icon_user_map_01.png');
                }
               
                return  <>
                            <Image source={iconComponent} className={`-mb-3 ${ route.name === 'Home' ? 'w-10 h-5' : 'w-7 h-7'}`} style={{ tintColor: iconColor }} /> 
                        </>
            },
            tabBarLabel: ({ focused }) => {
                let labelText;

                if (route.name === 'Home') {
                    labelText = 'Mijn Vochtinname';
                } else if (route.name === 'Add') {
                    labelText = 'Toevoegen';
                } else if (route.name === 'User') {
                    labelText = 'Mijn Erasmus MC';
                }

                return <>
                        <Text className={`text-xs ${ focused ? 'text-secondary' : 'text-primary'}`} style={{ fontFamily: 'Montserrat_700Bold' }}>{labelText}</Text>
                    </>;
            },
            headerShown: false,
            tabBarStyle: {
                paddingHorizontal: 14,
                height: 92,

            }
        })}>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Add" component={Add}></Tab.Screen>
            <Tab.Screen name="User" component={User}></Tab.Screen>
        </Tab.Navigator>
    )
}

export function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Introduction" component={Introduction}></Stack.Screen>
                <Stack.Screen name="Navbar" component={Navbar}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
