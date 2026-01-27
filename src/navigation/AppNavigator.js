import React from 'react';
import { Pressable } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Icon, Colors, Typography } from '../constants/design/tokens';
import AddButton from '../components/Navigation/AddButton';
import IndexScreen from '../screens/IndexScreen/IndexScreen';
import ShowScreen from '../screens/ShowScreen/ShowScreen';
import CreateScreen from '../screens/CreateScreen/CreateScreen';
import EditScreen from '../screens/EditScreen/EditScreen';
import ROUTES from '../constants/navigation/routes';
import OPTIONS from '../constants/navigation/screenOptions';


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ROUTES.Index}
                screenOptions={{
                    headerTitle: OPTIONS.HeaderTitle,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: Colors.headerBackground,
                    },
                    headerTitleStyle: {
                        fontSize: Typography.fontSize.extraExtraLarge,
                    },
                }}
            >
                <Stack.Screen
                    name={ROUTES.Index}
                    component={IndexScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <AddButton onPress={() => navigation.navigate(ROUTES.Create)} />
                        )
                    })}
                />
                <Stack.Screen
                    name={ROUTES.Show}
                    component={ShowScreen}
                    options={({ navigation, route }) => ({
                        headerRight: () => (
                            <Pressable onPress={() => navigation.navigate(ROUTES.Edit, { id: route.params.id })}>
                                <EvilIcons name="pencil" size={Icon.size.large} />
                            </Pressable>
                        ),
                    })}
                />
                <Stack.Screen name={ROUTES.Create} component={CreateScreen} />
                <Stack.Screen name={ROUTES.Edit} component={EditScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default AppNavigator;
