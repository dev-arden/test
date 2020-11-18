import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import firestore from "@react-native-firebase/firestore";

class testtest extends Component{
  state = {
    users: []
  }
  constructor(props) {
    super(props);
    this.subscriber = 
      firestore()
      .collection("users")
      .onSnapshot(docs => {
        let users = []
        docs.forEach(doc => {
          users.push(doc.data())
        })
        this.setState({ users })
        console.log(users)
    })
  }

  addRandomUser = async () => {
    let name = Math.random().toString(36).substring(7)
    firestore().collection('users').add({
      name,
      age: 20
    })
  }

  render() {
    return (
      <View>
          <Button title="Add Random User" onPress={this.addRandomUser}/>
        {this.state.users.map((user,index) => <View key={index}>
          <Text>{user.name}</Text>
        </View>)}
      </View>
    );
  }
}
  

export default testtest;