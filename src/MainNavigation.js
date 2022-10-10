import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen, ViewAllScreen, LoginScreen, RegisterScreen, ForgotPassScreen, ConfirmNewPassScreen, DetailScreen, OrderScreen, ProfilOrderScreen, TicketScreen, PaymentScreen } from "./screen";
import CustomDrawer from "./components/customDrawer";

const Drawer = createDrawerNavigator()


const DrawerRoute = () => {
    return (
        <Drawer.Navigator initialRouteName="Landing" drawerContent={props => <CustomDrawer {...props} />} >
            <Drawer.Screen name="Homes" component={HomeScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="List Movie" component={ViewAllScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Order" component={OrderScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="Setting" component={ProfilOrderScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" stackContent={props => <CustomDrawer {...props} />}>
                <Stack.Screen name="Home" component={DrawerRoute} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotPass" component={ForgotPassScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ConfirmNewPass" component={ConfirmNewPassScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Ticket" component={TicketScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation