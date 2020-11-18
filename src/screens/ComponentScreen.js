import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import {Text,Item,Label,Input,Button} from 'native-base';
import Form from 'react-native-form'
import SignaturePad from 'react-native-signature-pad'
import firestore from "@react-native-firebase/firestore";

class ComponentScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      signature: "",
      isSoulSold: false
     };
     //this.itemsRef = firestore().collection(`people`)
     this.getUser();
    }

    getUser = async () => {
      const userDocument = await firestore().collection("sign-here").
      doc('DlCMWylKeaTB1ETzYdBn').get()
      console.log(userDocument)
    }

  pushToFirebase() {
    let formValues = this.refs.soulForm.getValues()
    formValues.signature = this.state.signature
    if(formValues.firstName === "" || formValues.lastName === "" || formValues.signature === "") {
      console.log("Not all fields in the form are populated.")
    } else {
      this.itemsRef.push(formValues)
      this.setState({
        isSoulSold: true
      })
    }
  }

  signaturePadChange(base64DataUrl) {
    this.setState({
      signature: base64DataUrl
    })
  }

  signaturePadError(error) {
    console.error(error);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isSoulSold ? <View style={styles.formContainer}><Text>There is no way back...</Text></View> :
          <View style={styles.formContainer}>
            <Text style={styles.title}>
            Sell your SOUL to the devil
          </Text>
          <Text style={styles.text}>
            All you have to do is sign here
          </Text><Text></Text><Text></Text>
          <Form ref="soulForm" style={styles.form} >
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>First name</Label>
              <Input style={styles.input} name="firstName" type="TextInput" />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>Last name</Label>
              <Input style={styles.input} name="lastName" type="TextInput" />
            </Item>
            <View style={styles.signature}>
            <Label style={styles.signatureLabel}>Signature</Label>
              <SignaturePad
                onError={(error) => this.signaturePadError(error)}
                onChange={(sig) => this.signaturePadChange(sig)}
                style={styles.signaturePad}
                />
            </View>
            <Button Block primary onPress={() => this.pushToFirebase()} style={styles.button}><Text>SELL IT</Text></Button>
          </Form>
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  form: {
    width: '80%'
  },
  signature:{
    width: '100%',
    height: 150,
  },
  signaturePad: {
    flex:1,
    margin: 10,
    backgroundColor: '#eee',
  },
  button: {
    margin: 10
  },
  label: {
    marginLeft: 15
  },
  input: {
    marginLeft: 25
  },
  item: {
    marginTop:10
  },
  signatureLabel: {
    marginLeft: 15, marginTop: 15
  }
});

export default ComponentScreen;