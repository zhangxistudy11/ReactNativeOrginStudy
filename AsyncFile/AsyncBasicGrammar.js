import React, { Component } from 'react';
import { View, Text, TouchableHighlight ,NavigatorIOS, FlatList, TouchableWithoutFeedback } from 'react-native';
import Styles from '../CommonPart//Style/Styles';

export default class AsyncBasicGrammar extends React.Component {
  render() {
    return (
     
      <View style={Styles.container}>
         <FlatList 
        style = {Styles.flatListStyle}
        data={[{ key: '0-Async和await' },{ key: '1-then' },{key:'2-实例化一个Promise'},{key:'3-await获取Promise结果'},{key:'4-回调方法获取Promise结果'}]}
        renderItem={this._renderFlatListItem}
        ItemSeparatorComponent = {() => (<View style={Styles.separator}></View>)}

      />
      </View>
    );
  }
  _renderFlatListItem = (data) => {
    let self = this;
    return (<View  style={Styles.itemViewStyle}>
      <TouchableWithoutFeedback onPress={
          () => { this.clickItem(data.index)}}
          >
        <View>
          <Text style={ [Styles.itemTestStyle,{color:'#333'},{fontFamily:'PingFangSC-Regular'},{fontSize:17} ]}>{data.item.key}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>)
  }
  clickItem(index){
    console.log(index)
     if(index==0){
         this.testZeroMethod();
     }else if(index ==1){
        this.testOneMethod();
     }else if(index ==2){
        this.testTwoMethod();
     }else if(index ==3){
        this.testThreeMethod();
     }else if(index ==4){
        this.testFourMethod();
     }
  }
  testZeroMethod= async()=>{
    try {
        // 注意这里的await语句，其所在的函数必须有async关键字声明
        let response = await fetch(
          'https://facebook.github.io/react-native/movies.json',
        );
        console.log(response)
      } catch (error) {
        console.error(error);
      }
  }
  testOneMethod= ()=>{
         fetch('https://facebook.github.io/react-native/movies.json')
       .then((response)=>{
           console.log(response)
       })
       .catch((error)=>{
        console.error(error)
       })
  }
  testTwoMethod = (data)=>{
      let promise = new Promise ((resolve,reject)=>{
          let person = data||{name:"Jesse",age:30};
          let  jsonStr =JSON.stringify(person);
             if(jsonStr){
                 resolve(jsonStr)
             }else{
                reject()
             }
         
      })
      return promise;
  }
  testThreeMethod = async()=>{
     let data = {name:'Jim',age:18};
     let result = await this.testTwoMethod(data);
     console.log(result); 
  }
  testFourMethod = ()=>{
    let data = {name:'Kin',age:50};
    this.testTwoMethod(data).then((result)=>{
        console.log(result); 
    }).catch((error)=>{
        console.log(error); 
    })
    
  }
}

