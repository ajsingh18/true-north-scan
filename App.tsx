import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import ScannerScreen from './src/screens/BarcodeScannerScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import AddProductScreen from './src/screens/AddProductScreen';
import ScannedProductScreen from './src/screens/ScannedProductScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ScanStack = createStackNavigator();
const ProductsStack = createStackNavigator();

// Home tab with AddProduct screen
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="AddProduct" component={AddProductScreen} />
    </HomeStack.Navigator>
  );
}

// Scanner tab
function ScanStackScreen() {
  return (
    <ScanStack.Navigator screenOptions={{ headerShown: false }}>
      <ScanStack.Screen name="Scanner" component={ScannerScreen} />
    </ScanStack.Navigator>
  );
}

// Products tab with scanned detail
function ProductsStackScreen() {
  return (
    <ProductsStack.Navigator screenOptions={{ headerShown: false }}>
      <ProductsStack.Screen name="ProductsMain" component={ProductsScreen} />
      <ProductsStack.Screen name="Products" component={ProductsScreen} />
    </ProductsStack.Navigator>
  );
}

// Main App with bottom tabs
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Scan') {
              iconName = focused ? 'barcode' : 'barcode-outline';
            } else if (route.name === 'Products') {
              iconName = focused ? 'list' : 'list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#048BA8',
          tabBarInactiveTintColor: '#ccc',
          tabBarStyle: {
            height: 85,
            paddingBottom: 10,
            paddingTop: 6,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Scan" component={ScanStackScreen} />
        <Tab.Screen name="Products" component={ProductsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
