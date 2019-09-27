import React, { Component } from 'react';
import { View, Text, TouchableHighlight, NavigatorIOS, FlatList, TouchableWithoutFeedback } from 'react-native';
import Styles from '../CommonPart//Style/Styles';
import { Button } from 'beeshell/dist/components/Button';

export default class TimerUser extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
    }
    render() {
        return (
            <View style={[Styles.container, { marginTop: 100 }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {this._renderEventView(0)}
                </View>

            </View>
        );
    }
    _renderEventView = (code) => {
     
        return (
            <View style={{ width: 60, height: 40, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>

                <Button type="primary" size="md" textColorInverse>首选项 primary</Button>
                <Button type="primary" size="md">
                    <View>
                        <Text>自定义</Text>
                        <Text>支持组件</Text>
                    </View>
                </Button>

                <Button type='info' size='sm' disabled>
                    信息 info
</Button>
            </View>
        )
    }
    touchEvent = (code) => {

        if (code === 0) {
            console.log('点击' + new Date())
            this.startUserTimer()
        } else if (code === 1) {
            console.log('停止' + new Date())
            console.log('停止计时')
            this.clearUserTimer()
        } else if (code === 2) {
            console.log('重新计时' + new Date())
            this.startUserTimer()
        }
    }
    startUserTimer() {
        // if(!this.timer||(this.timer == 'undefined'))
        // {
        this.timer = setTimeout(() => {
            console.log('计时器执行' + new Date())
        }, 5000);
        // }
    }
    clearUserTimer() {
        this.timer && clearTimeout(this.timer)
        this.timer = null
        console.log(!this.timer)
        console.log(this.timer == 'undefined')
        console.log((!this.timer || (this.timer == 'undefined')))
    }
}