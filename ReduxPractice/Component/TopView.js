import React, { Component } from 'react';
import { View, Text, Animated, Easing, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../../CommonPart/Style/Styles';
import { connect } from 'react-redux';
import {addChangeColor} from '../actions'
class TopView extends Component {
    constructor(props) {
        super(props);
        this.colorText = '';
        // this.state=({
        //     colorText:''
        // })
        // this.clickChangeColor = this.clickChangeColor.bind(this);
    }
    componentDidMount(){
        // this.runAmimationThree();
    }
  
    clickTestChangeColor() {
        console.log('aaaaaa');
        console.log(this.colorText);
        this.props.dispatch(addChangeColor(this.colorText))
        // this.props.dispatch({
        //     type: 'CHANGE_COLOR',
        //     backColor: this.colorText,
        // })
        // console.log(this.props, 'TopView');

    }
 
    render() {

        return (
    <View style={[Styles.container, { marginTop: 100 }]}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row',height:100}}>
            <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1,width:150}}
                    onChangeText={text => {
                        this.colorText = text
                     }}
            />
             <TouchableOpacity onPress={()=>{
                 this.props.dispatch(addChangeColor( this.colorText))
                //  this.clickTestChangeColor();
             }}>
                <View style={{ 
                    width:100, height:30,justifyContent: 'center', alignItems: 'center', 
                    flexDirection: 'row', backgroundColor: 'red'}}>
                    <Text>输入颜色值</Text>
                </View>
            </TouchableOpacity>
        </View>
                   
                 {/* {this.testAnimated()} */}
    </View>
        );
    }
}
//connect()方法来把展示组件和容器组件关联在一起
//把展示组件连接到 Redux
//使组件和Store连接起来,组件的props能拿到dispatch
export default connect()(TopView)