/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Platform, StyleSheet, Text, View,FlatList, TouchableWithoutFeedback ,NavigatorIOS,Dimensions} from 'react-native';
import Styles from './CommonPart//Style/Styles';
import BasicGrammar from './ES6Grammar/BasicGrammar'
import TimerUser from './TimerPart/TimerUser'
import AsyncBasicGrammar from './AsyncFile/AsyncBasicGrammar'
import AnimationBasic from './Animation/AnimationBasic'
import ReduxBasic from './ReduxPractice/ReduxBasic'
const {
	width,height
} = Dimensions.get('window');
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
  render() {
    return (
       <NavigatorIOS
        initialRoute={{
          component: AppConment,
          title: '首页'
        }}
        style={{flex: 1}}
      />
        
    );
  }

}

 class AppConment extends Component{
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }
  render() {
    return (
     
      <View style={Styles.container}>
         <FlatList 
        style = {Styles.flatListStyle}
        data={[{ key: '0-ES6语法' }, { key: '1-定时器使用' },{ key: '2-异步使用' },{ key: '3-RN中的动画' },{key: '4-Redux使用' }]}
        renderItem={this._renderFlatListItem}
        ItemSeparatorComponent = {() => (<View style={Styles.separator}></View>)}

      />
      </View>
    );
  }
  _renderFlatListItem = (data) => {
    return (<View  style={Styles.itemViewStyle}>
      <TouchableWithoutFeedback onPress={() => { this.clickItem(data) }}>
        <View style={[{width:width}]}>
          <Text style={ [Styles.itemTestStyle,{color:'#333'},{fontFamily:'PingFangSC-Regular'},{fontSize:17} ]}>{data.item.key}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>)
  }
  clickItem(data){

   switch(data.index){
     case 0 :
      this.props.navigator.push({
        component: BasicGrammar,
        title:'ES6语法基础'
      });
     break;
     case 1:
     this.props.navigator.push({
      component: TimerUser,
      title:'定时器使用'
    });
     break;
     case 2:
     this.props.navigator.push({
      component: AsyncBasicGrammar,
      title:'异步使用'
    });
     break;
     case 3:
     this.props.navigator.push({
      component: AnimationBasic,
      title:'RN中的动画'
    });
     break;
     case 4:
      this.props.navigator.push({
       component: ReduxBasic,
       title:'Redux使用'
     });
      break;
     default:
     break;
   }
 
  }
 
}
