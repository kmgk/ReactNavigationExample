import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../../style';
import { NestStackNavProp, RootStackNavProp } from '../Navigations';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavProp<'Home'>>();

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

export const HogeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>HogeScreen</Text>
    </View>
  );
};

export const Tab1Screen: React.FC = () => {
  const navigation = useNavigation<RootStackNavProp<'Tab'>>();

  return (
    <View style={styles.container}>
      <Text>
        TabNavigatorはRootNavigatorのScreenとしてネストしているので、Hogeスクリーンに遷移した時下のtabナビゲーションは表示されない。（TabNavigator → HogeScreenと遷移しているので全画面にHogeScreenが表示される）
      </Text>
      <Button 
        title="Go to HogeScreen from TabNavigator"
        onPress={() => navigation.navigate('Hoge')}
      />
    </View>
  );
};

export const Tab2Screen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Tab2Screen</Text>
    </View>
  );
};

export const Tab3Screen: React.FC = () => {
  const navigation = useNavigation<NestStackNavProp<'Tab3'>>();

  return (
    <View style={styles.container}>
      <Text>
        TabNavigatorの下にNestNavigatorがネストされているので、Hogeスクリーンに遷移しても下のtabナビゲーションは表示されたまま。（NestNavigator → HogeScreenと遷移しているのでNestNavigatorの親であるTabNavigatorの中にHogeScreenが表示される）
      </Text>
      <Button 
        title="Go to HogeScreen from NestNavigator"
        
        onPress={() => navigation.navigate('Hoge')}
      />
    </View>
  );
};