import React, { Component } from 'react';
import { View, Text, TouchableHighlight ,NavigatorIOS, FlatList, TouchableWithoutFeedback } from 'react-native';
import Styles from '../../CommonPart/Style/Styles';
import MTCalendar from  './MTCalendar';
import MeiTuanButton from  './MeiTuanButton';


export default class MeiTuan extends Component {
  render() {
    return (
     
      <View style={Styles.container}>
         <FlatList 
        style = {Styles.flatListStyle}
        data={[{ key: '0-日历' },{ key: '1-Button' }]}
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
        component: MTCalendar,
        title:'日历'
      });
    
  }
  
  testOneMethod= ()=>{
    this.props.navigator.push({
        component: MeiTuanButton,
        title:'1-按钮'
      });
  }
  /*
  testTwoMethod = (data)=>{
    this.props.navigator.push({
      component: OrderDetailDispalyBar,
      title:'2-订单明细弹框'
    });
  }
  testThreeMethod = async()=>{
    this.props.navigator.push({
      component: SVGBasic,
      title:'3-svg画基本图形'
    }); 
  }
  testFourMethod = ()=>{
    let data = {name:'Kin',age:50};
    this.testTwoMethod(data).then((result)=>{
        console.log(result); 
    }).catch((error)=>{
        console.log(error); 
    })
    
  }
  */
}

