import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        onPress = {() => navigation.navigate('Component')}
        title = "Go to Components Demo" 
      />
      <Button 
        onPress = {() => navigation.navigate('test')}
        title = "Go to test screen" 
      />
      <Button 
        onPress = {() => navigation.navigate('Form')}
        title = "Go to Form screen" 
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;