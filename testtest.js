import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import firestore from "@react-native-firebase/firestore";

class testtest extends Component{
  state = {
    user: {
      name: ""
    }
  }
  constructor(props) {
    super(props);
    this.getUser();
    this.subscriber = firestore().collection("users").doc
    ('GqGVFQig9kAIbvtvEaqP').onSnapshot(doc => {
        this.setState({
          user: {
            name: doc.data().name
          }})
    })
  }
  getUser = async () => {
    const userDocument = await firestore().collection("users").
    doc('GqGVFQig9kAIbvtvEaqP').get()
    console.log(userDocument)
  }

  render() {
    return (
      <View>
        <Text>Name: {this.state.user.name}</Text>
      </View>
    );
  }
}

export default testtest