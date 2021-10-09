import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Hoge: undefined;
  Tab: undefined;
}

type TabParamList = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
}

const HomeStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen 
          name="Home"
          component={HomeScreen} 
        />
        <HomeStack.Screen
          name="Hoge"
          component={HogeScreen}
        />
        <HomeStack.Screen
          name="Tab"
          component={TabNavigator}
          // options={{
          //   headerShown: false
          // }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <View style={styles.container}>
      <Button 
        title="Go To HogeScreen" 
        onPress={() => navigation.navigate('Hoge')} 
      />
      <Button 
        title="Go To Tab" 
        onPress={() => navigation.navigate('Tab')} 
      />
    </View>
  )
}

const HogeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>HogeScreen</Text>
    </View>
  );
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Tab1" screenOptions={{headerShown: false}}>
      <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
      <Tab.Screen name="Tab3" component={Tab3Screen} />
    </Tab.Navigator>
  )
}

const Tab1Screen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Tab1Screen</Text>
    </View>
  );
};

const Tab2Screen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Tab2Screen</Text>
    </View>
  );
};

const Tab3Screen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Tab3Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
