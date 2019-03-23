import React, { Component } from 'react';
import { View, Text, Animated, Easing, FlatList, TouchableWithoutFeedback } from 'react-native';
import Styles from '../CommonPart//Style/Styles';

export default class AnimationZero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemOpacity: new Animated.Value(0),  // 透明度初始值设为0
            leftValue: new Animated.Value(0),
            slideValue: new Animated.Value(300)
        }
    }
    componentDidMount(){
        // this.runAmimationThree();
        this.runAmimationZero();
    }
    runAmimationZero = ()=>{
        let deep = 0;
        let duration = 200;
        Animated.timing(
            this.state.slideValue,
            {
                toValue: deep,
                duration,
                easing: Easing.linear,
                useNativeDriver: true,
                delay:1000

            }
        ).start();
    }
    runAmimationThree = ()=>{
        let light = 0.5;
        let deep = 1.0;
        let duration = 4000;
        Animated.parallel([
            Animated.timing(
                this.state.itemOpacity,
                {
                    toValue: deep,
                    duration,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }
            ),
            Animated.timing(                  // 随时间变化而执行动画
                this.state.leftValue,            // 动画中的变量值
                {
                  toValue: 100,                  // 透明度最终变为1，即完全不透明
                  duration: duration,
                  easing: Easing.linear,
                    useNativeDriver: true
       // 让动画持续一段时间
                }
              )
        ]).start();
    }
    render() {
        return (
            <View style={[Styles.container, { marginTop: 100 }]}>
                 {/* {this.testAnimated()} */}
                 {this.testSlide()}
            </View>
        );
    }
    testSlide = ()=>{
        let { slideValue} = this.state;
        return (
            <Animated.View                 // 使用专门的可动画化的View组件
              style={{
                  bottom:0,position:'absolute',
                 height:300,width:375,backgroundColor:'green',
                transform:[
                  {translateY: slideValue}, // y轴移动
              ]
              }}
            >
            </Animated.View>
          );
    }
    testAnimated = ()=>{
        let { itemOpacity, leftValue} = this.state;

        return (
          <Animated.View                 // 使用专门的可动画化的View组件
            style={{
                // left:leftValue,
               height:100,width:50,backgroundColor:'green',
              opacity: itemOpacity,
              marginTop:30   ,marginLeft:30 ,// 将透明度指定为动画变量值
              transform:[
                {translateX: leftValue}, // x轴移动
                {translateY: leftValue}, // y轴移动
            ]
            }}
          >
          </Animated.View>
        );
      }
   
}