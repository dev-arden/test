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
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;