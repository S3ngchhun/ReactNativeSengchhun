import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
// import CutomHeaderScreen from './src/screens/TestHeader';
import {createStackNavigator} from '@react-navigation/stack';

const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
