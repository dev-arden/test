import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import firestore from "@react-native-firebase/firestore";

class testtest extends Component{
  state = {
    user: {
      name: "",
      age: ""
    }
  }
  constructor(props) {
    super(props);
    this.getUser();
    this.getUsers(); 
     
    firestore()
      .collection('Users')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          console.log('User ID: ', documentSnapshot.id, 
          documentSnapshot.data());
        });
      });
  }
  getUser = async () => {
    const userDocument = await firestore()
      .collection("users").doc('UQlo2CncZ409AxyJczQc').get()
    console.log(userDocument)
  } 

  getUsers = async () => {
    const users= await firestore()
      .collection("users")
      .where('age', '==', 20 )
      .get()
    console.log(users)
  } 

  render() {
    return (
      <View>
        <Text>Name: {this.state.user.name}</Text>
        <Text>Age: {this.state.user.age}</Text>
      </View>
    );
  }
}

export default testtest