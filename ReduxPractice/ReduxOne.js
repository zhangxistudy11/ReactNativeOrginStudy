import React, { Component } from 'react';
import { View, Text, Animated, Easing, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../CommonPart/Style/Styles';
import TopView from './Component/TopView';
import BottomView from './Component/BottomView';
import { createStore } from 'redux';
import rootReducer from './reducers/chageColor';
import { Provider } from 'react-redux'

const store = createStore(
    rootReducer
    //添加中间件
);

export default class ReduxOne extends Component {
    constructor(props) {
        super(props);
     
    }
    componentDidMount(){
        // this.runAmimationThree();
    }
  
   
    render() {
     //创建store传入reducers。
     //使用Provider组件包裹 Group组件, store作为属性传入Provider
        return (
         <Provider store={store}>
            <View style={[Styles.container, { marginTop: 100 }]}>
                <TopView></TopView>
                <BottomView></BottomView>
            </View>
         </Provider>
        );
    }
  
   
}