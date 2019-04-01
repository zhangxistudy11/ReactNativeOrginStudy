import React from 'react';
import { Modal, Text, TouchableOpacity, View, Dimensions ,Animated, Easing} from 'react-native';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class OrderDetailDispalyBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMoadl: false,
            slideValue: new Animated.Value(100)
        };

    }

    componentDidMount() {
        // this.runAmimationZero();

    }

    render() {
        const { showMoadl } = this.state;

        return (

            <View style={[{ backgroundColor: 'red', flex: 1 }]}>
                {this._renderBottomBar()}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={showMoadl}

                >
                    <View style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", flex: 1 }}>
                    {this._renderSlideView()}

                        {this._renderBottomBar()}
                    </View>
             
                </Modal>
            </View>


        );
    }
    runAmimationZero = ()=>{
        let deep = 0;
        let duration = 15;
        Animated.timing(
            this.state.slideValue,
            {
                toValue: deep,
                duration,
                easing: Easing.linear,
                useNativeDriver: true,

            }
        ).start();
    }
    //滑动部分
    _renderSlideView = ()=>{
        let { slideValue} = this.state;
        return (
            <Animated.View                 // 使用专门的可动画化的View组件
              style={{
                 bottom:100,position:'absolute',
                 height:20,width:screenWidth,backgroundColor:'green',
                transform:[
                  {translateY: slideValue}, // y轴移动
              ]
              }}
            >
            </Animated.View>
          );
    }
    //底部点击区域
    _renderBottomBar = () => {
        const { showMoadl } = this.state;
        let barHeight = this.getBarHeight();
        let fillHeight = this.getBottomFillHeight();
        let rightWidth = this.getRightWidth();
        return (
            <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'black', height: barHeight, width: screenWidth, flexDirection: 'column' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: 'blue'}}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row',height:barHeight-fillHeight}}>
                        <TouchableOpacity onPress={() => {
                            this.clickLeftBar(!showMoadl);
                        }}>
                        <View style={{ width:100, height:30,justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: 'white'}}>
                            <Text>开始弹框</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: rightWidth, flexDirection: 'row', backgroundColor: 'yellow',height:barHeight-fillHeight }}>

                        <TouchableOpacity onPress={() => {
                            this.clickLeftBar(!showMoadl);
                        }}>
                            <Text>隐藏弹框</Text>
                        </TouchableOpacity>
                    </View>
                               </View>

                {this._renderFillView()}
            </View>
        )
    }
    //不同设备底部的填充部分 iphoneX底部滑动部分
    _renderFillView = () => {
        let height = this.getBottomFillHeight();
        if (height > 0) {
            return (
                <View style={{ backgroundColor: "white", height: 10 }}>
                </View>
            )
        } else {
            return (<View></View>)
        }

    }

    /***Touch Event Method */
    //点击区域的左边部分
    clickLeftBar = (showMoadl) => {
        this.setState({
            showMoadl: showMoadl
        })
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
    //点击区域的右边部分
    clickRightBar = () => {

    }
    /***Private Method*/
    getBottomFillHeight = () => {
        return 5;
    }
    getBarHeight = () => {
        let height = this.getBottomFillHeight();
        return (50 + height);
    }
    getRightWidth = () => {
        return 80;
    }

}