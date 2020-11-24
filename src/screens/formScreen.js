import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput,ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const formScreen = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    //여기 부분은 나중에 compsonent로 빼도 괜찮을 듯,코드 깔끔하게
    <View style = {{flex:1}}>
      <ScrollView>
        <View style = {styles.headerstyle}>
          <Text>◼︎ 호스피스 완화의료 및 임종과정에 있는 환자의 연명의료결정에 관한 법률 시행규칙 [별지 제6호서식]</Text>
          <Text style = {styles.letterstyle}>사전연명의료의향서</Text>
          <Text>※ 색상이 어두운 부분은 작성하지 않으며, []에는 해당되는 곳에 체크 표시를 합니다.</Text>
        </View>

        <View style = {styles.peoplestyle}> 
          <Text style={styles.titlestyle}>작성자</Text>
          <Text style={styles.writerstyle}>성명</Text>
          <TextInput 
            style = {styles.inputstyle}
            placeholder="성명" 
          />
          <Text style={styles.writerstyle}>주민등록번호</Text>
          <TextInput 
            style = {styles.inputstyle}
            placeholder="주민등록번호" 
          />
          <Text style={styles.writerstyle}>주소</Text>
          <TextInput 
            style = {styles.inputstyle}
            placeholder="주소" 
          />
          <Text style={styles.writerstyle}>전화번호</Text>
          <TextInput 
            style = {styles.inputstyle}
            placeholder="전화번호" 
          />
        </View>

        <View>
          <Text style = {styles.titlestyle}>연명의료 중단등결정(항목별로 선택합니다)</Text>
            <View style={styles.checkboxInput}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                testID = "심폐소생술"
              />
              <Text style={styles.checkboxstyle}>심폐소생술</Text>
            </View>
            <View style={styles.checkboxInput}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                testID = "인공호흡기 착용"
              />
              <Text style={styles.checkboxstyle}>인공호흡기 착용</Text>
            </View>
            <View style={styles.checkboxInput}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                testID = "혈액투석"
              />
              <Text style={styles.checkboxstyle}>혈액투석</Text>
            </View>
            <View style={styles.checkboxInput}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                testID = "항암제 투여"
              />
              <Text style={styles.checkboxstyle}>항암제 투여</Text>
            </View>
        </View>

        <View>
          <Text>호스피스의 이용 계획</Text>
          <Text>이용 의향이 있음</Text>
          <Text>이용 의향이 없음</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  letterstyle: {
    fontSize : 25,
    fontWeight : 'bold',
    alignSelf: 'center',
    marginBottom : 10,
    marginTop : 10
  },

  headerstyle : {
    marginTop: 10,
    marginHorizontal: 15,
    marginBottom: 20
  },

  peoplestyle : {
    //marginHorizontal: 15,
    borderTopColor : 'grey',
    borderTopWidth : 1,
    borderBottomColor : 'grey',
    borderBottomWidth : 1
  },

  titlestyle: {
    fontSize:21,
    marginBottom :10,
    marginTop : 10,
    marginHorizontal : 15
  },

  writerstyle: {
    fontSize:18,
    marginHorizontal : 15
  },

  inputstyle : {
    fontSize:18,
    borderRadius:5,
    borderWidth:1,
    borderColor:'grey',
    marginBottom: 15,
    marginHorizontal: 15,
    padding : 5,
    margin : 5
  },

  checkboxstyle: {
    fontSize:18,
    alignSelf :'center',
    marginLeft : 10
  },

  checkboxInput: {
    flexDirection: "row",
    marginBottom: 20,
    marginHorizontal : 15
  }
});

export default formScreen;
