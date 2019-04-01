import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Styles from '../CommonPart//Style/Styles';
let { screenWidth } = Dimensions.get('window').width;

export default class AnimationModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            testStr:'第一次'
        };

    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible ,testStr:'第二次'});
    }
    componentDidMount() {

    }

    render() {
        const {testStr} = this.state;
        return (

            <View style={[Styles.container, { backgroundColor: 'red' }]}>
                <View style={{ marginTop: 100, flexDirection: 'column' }}>
                    <View>
                            <Text>{testStr}</Text>
                    </View>
                    <View style={{ marginLeft: 50, marginTop: 100, width: 100, height: 50, backgroundColor: "yellow" }}>
                    </View>
                </View>
                <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'yellow', height: 50, width: 375, flexDirection: 'row' }}>
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
                <Modal
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


                                {/* <Text>开始弹框</Text> */}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                            <View style={{ backgroundColor: "clear", width: 100, height: 50 }}>
                                {/* <Text >隐藏弹框</Text> */}
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>


        );
    }


}