import React, { Component } from 'react';
import { View, Text, TouchableHighlight ,NavigatorIOS, FlatList, TouchableWithoutFeedback } from 'react-native';
import Styles from '../CommonPart//Style/Styles';
import ES6Zero from './ES6Zero'

export default class BasicGrammar extends React.Component {
  render() {
    return (
     
      <View style={Styles.container}>
         <FlatList 
        style = {Styles.flatListStyle}
        data={[{ key: '0-ES6语法' }]}
        renderItem={this._renderFlatListItem}
        ItemSeparatorComponent = {() => (<View style={Styles.separator}></View>)}

      />
      </View>
    );
  }
  _renderFlatListItem = (data) => {
    return (<View  style={Styles.itemViewStyle}>
      <TouchableWithoutFeedback onPress={() => { this.clickItem(data.index) }}>
        <View>
          <Text style={ [Styles.itemTestStyle,{color:'#333'},{fontFamily:'PingFangSC-Regular'},{fontSize:17} ]}>{data.item.key}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>)
  }
  clickItem(index){
    // console.log(index)
     if(index==0){
         this.testZeroMethod();
     }
     else if(index ==1){
        this.testOneMethod();
     }
    // else if(index ==2){
    //     this.testTwoMethod();
    //  }
   // else if(index ==3){
    //     this.testThreeMethod();
    //  }else if(index ==4){
    //     this.testFourMethod();
    //  }
  }
  testZeroMethod= ()=>{
    this.props.navigator.push({
        component: ES6Zero,
        title:'基本语法'
      });
    
  }
}

