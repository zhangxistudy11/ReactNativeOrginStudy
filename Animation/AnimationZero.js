import React, { Component } from 'react';
import { View, Text, Animated, Easing, FlatList, TouchableOpacity } from 'react-native';
import Styles from '../CommonPart//Style/Styles';

export default class AnimationZero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemOpacity: new Animated.Value(0),  // 透明度初始值设为0
            leftValue: new Animated.Value(0),
            slideFromValue: new Animated.Value(0),
            // slideToValue :new Animated.Value(0)
        }
    }
    componentDidMount(){
        // this.runAmimationThree();
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
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row',height:100}}>
                        <TouchableOpacity onPress={() => {
                            this.clickLeftBar();
                        }}>
                        <View style={{ width:100, height:30,justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: 'white'}}>
                            <Text>开始弹框</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, flexDirection: 'row', backgroundColor: 'yellow',height:100 }}>

                        <TouchableOpacity onPress={() => {
                            this.clickRightBar();
                        }}>
                            <Text>隐藏弹框</Text>
                            
                        </TouchableOpacity>
                    </View>
                 {/* {this.testAnimated()} */}
                 {this.testSlide()}
            </View>
        );
    }
    clickLeftBar = ()=>{
        this.runAmimationZero();

    }
    runAmimationZero = ()=>{
        const {slideFromValue} = this.state;
        let duration = 200;
        Animated.timing(
            slideFromValue,
            {
                toValue: new Animated.Value(-300),
                duration,
                easing: Easing.linear,
                useNativeDriver: true,

            }
        ).start(({ finished }) => {
            if (finished) {
                // console.log("ffffffff")
                // let temp = slideFromValue;
                // this.setState({
                //     slideFromValue:slideToValue,
                //     slideToValue:temp
                // })
            }
          });
    }
    clickRightBar =()=>{
        const {slideFromValue} = this.state;
        let duration = 200;
        Animated.timing(
            slideFromValue,
            {
                toValue: new Animated.Value(0),
                duration,
                easing: Easing.linear,
                useNativeDriver: true,

            }
        ).start();
    }
    testSlide = ()=>{
        let { slideFromValue} = this.state;
        return (
            <Animated.View                 // 使用专门的可动画化的View组件
              style={{
                  bottom:-(300-80),position:'absolute',
                 height:300,width:375,backgroundColor:'green',
                transform:[
                  {translateY: slideFromValue}, // y轴移动
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