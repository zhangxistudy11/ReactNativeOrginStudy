import React, { Component } from 'react';
import { View, Text, TouchableHighlight, NavigatorIOS, FlatList, TouchableWithoutFeedback } from 'react-native';
import Styles from '../CommonPart//Style/Styles';
import { Button } from 'beeshell/dist/components/Button';

export default class ES6Zero extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.person = {
            name :'zx',
            class:{
                sex:'男',
                age:18
            }
        }
      }
    render() {
        return (
            <View style={[Styles.container, { marginTop: 100 }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {this._renderEventView(0)}
                    {this._renderEventView(1)}
                    {this._renderEventView(2)}
                </View>

            </View>
        );
    }
    _renderEventView = (code) => {
        let str = ''
        if(code == 0){
            str = '开始计时'
        }else if (code == 1){
            str = '停止计时'
        }else if (code == 2){
            str = '新开计时'
        }
        return (
            <View style={{ width: 60, height: 40, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                <TouchableWithoutFeedback onPress={() => { this.touchEvent(code) }}>
                    <View style={{}}>
                        <Text style={[{ color: '#333' }, { fontFamily: 'PingFangSC-Regular' }, { fontSize: 14 }]}>{str}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View>
 
                </View>
            </View>
        )
    }
    touchEvent = (code) => {
     
        if (code === 0) {
         console.log('点击' + new Date())
        this.startUserTimer()
        } else if (code === 1){
            console.log('停止' + new Date())
         console.log('停止计时')
         this.clearUserTimer()
        }else if (code === 2){
            console.log('重新计时'+ new Date())
            this.startUserTimer()
            //ffff
         }
    }
    startUserTimer (){
     console.log(this.person.class.sex)
    }
    clearUserTimer ()
    {
        const {class:{sex}}= this.person
        console.log(sex)
    }
}