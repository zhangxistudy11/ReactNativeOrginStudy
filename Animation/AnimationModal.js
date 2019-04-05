import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Styles from '../CommonPart//Style/Styles';
let { screenWidth } = Dimensions.get('window').width;

export default class AnimationModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            testStr: '第一次fff'
        };

    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible, testStr: '第二fff次' });
    }
    componentDidMount() {

    }

    render() {
        const { testStr } = this.state;
        return (

            <View style={[Styles.container, { backgroundColor: 'red' }]}>
                <View style={{ marginTop: 100, flexDirection: 'column' }}>
                    <View>
                        <Text>{testStr}</Text>
                    </View>
                    <View style={{ marginLeft: 50, marginTop: 100, width: 100, height: 50, backgroundColor: "yellow" }}>
                    </View>
                </View>
                <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'yellow', height: 50, width: 375, flexDirection: 'row', zIndex: 3 }}>
                    <TouchableOpacity onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                        <Text>开始弹框</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                        <Text >隐藏弹框</Text>
                    </TouchableOpacity>
                </View>
                {this.state.modalVisible &&
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            zIndex: 0,
                            backgroundColor: "rgba(0,0,0, 0.6)",
                            zIndex:0
                        }}
                    >
                      
                    </TouchableOpacity>}
                    <View style={{ backgroundColor: "white", width:200,height:200,zIndex:1}}>
                    <Text>{testStr}</Text>

                    </View>
                {/* <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}

                >
                    <View style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", flex: 1 }}>
                    </View>
                    <View style={{ backgroundColor: "blue", height: 50, width: 375, flexDirection: 'row' }}>

                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                            <View style={{ backgroundColor: "clear", width: 100, height: 50 }}>


                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                            <View style={{ backgroundColor: "clear", width: 100, height: 50 }}>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal> */}
            </View>


        );
    }


}