import React, { Component } from 'react';
import { View, Text, Animated, Easing, FlatList, TouchableOpacity } from 'react-native';
import Styles from '../CommonPart//Style/Styles';
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

export default class SVGBaseic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           chartWidth : new Animated.Value(0),
        }
    }
    componentDidMount() {
      this.startAnimation();
    }
    startAnimation = ()=>{
        const {chartWidth} = this.state;
        let deep = 1.0;
        let duration = 500;
        Animated.timing(
            chartWidth,
            {
                toValue: deep,
                duration,
                easing: Easing.linear,
                useNativeDriver: true,

            }
        ).start( );
    }
    render() {
        return (
            <View style={[Styles.container, { marginTop: 100 }]}>
                {this._testOne()}
                {this._testTwo()}
                {this._testThree()}
                {this._testFour()}
                {this._testFive()}
            </View>
        );
    }
    _testOne = () => {
        return (
            <Svg height="100" width="40" viewBox="0 0 100 100">
                <Circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="blue"
                    strokeWidth="2.5"
                    fill="green"
                />
                <Rect
                    x="15"
                    y="15"
                    width="70"
                    height="70"
                    stroke="red"
                    strokeWidth="2"
                    fill="yellow"
                />
            </Svg>
        )
    }
    _testTwo = () => {
        return (
            <Svg
            height="100"
            width="100"
            fill ='red'
            style = {{backgroundColor:'yellow'}}
        >
            <Polygon
                points="0 0,100 50,100 100,0 100"
                fill="lime"
                stroke="purple"
                strokeWidth="1"
            />
        </Svg>
        )
    }
    _testThree = () => {
        return (
            <Svg
                height="200"
                width="300"
            >
              <Polyline
                    points="10 20,20 5,30 30,40 3,200 20"
              
                    stroke="black"
                    strokeWidth="5"
                    
                />
                <Polyline
                    points="10 20,20 5,30 30,40 3,200 20,200 50,10 50,10 20"
                    fill="red"
                />
            </Svg>
        )
    }
    _testFour = () =>{
        const {chartWidth} = this.state;

        return (
            <Animated.View style={{ height:200,width:300, backgroundColor:'green',transform:[
                {scaleX: chartWidth}, // y轴移动
            ]}}>
            <Svg
                height="200"
                width="300"
            >
              <Polyline
                    points="0 20,20 5,30 30,40 3,200 20"
              
                    stroke="black"
                    strokeWidth="5"
                    
                />
                <Polyline
                    points="0 20,20 5,30 30,40 3,200 20,200 50,0 50,0 20"
                    fill="red"
                />
            </Svg>
          
            </Animated.View>
        ) 
    }
    _testFive = ()=>{
        const {chartWidth} = this.state;

        return (
            <View>
             <View style={{width:100,height:200,backgroundColor:'blue'}}>
             </View>   
            <Animated.View style={{ height:200,width:300*2,left:-200,bottom:-20, position:'absolute',backgroundColor:'clear',transform:[
                {scaleX: chartWidth}, // y轴移动
            ]}}>
              <Svg
                height="200"
                width="300"
                style = {{left:300, position:'absolute'}}
            >
              <Polyline
                    points="0 20,20 5,30 30,40 3,200 20"
              
                    stroke="black"
                    strokeWidth="5"
                    
                />
                <Polyline
                    points="0 20,20 5,30 30,40 3,200 20,200 50,0 50,0 20"
                    fill="red"
                />
            </Svg>
          
            </Animated.View>
            </View>
        ) 
    }
}