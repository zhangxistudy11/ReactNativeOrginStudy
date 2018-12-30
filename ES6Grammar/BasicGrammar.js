import React, { Component } from 'react';
import { View, Text, TouchableHighlight ,NavigatorIOS, FlatList, TouchableWithoutFeedback } from 'react-native';
import Styles from '../CommonPart//Style/Styles';

export default class BasicGrammar extends React.Component {
  render() {
    return (
     
      <View style={Styles.container}>
         <FlatList 
        style = {Styles.flatListStyle}
        data={[{ key: '0-ES6语法' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' }]}
        renderItem={this._renderFlatListItem}
        ItemSeparatorComponent = {() => (<View style={Styles.separator}></View>)}

      />
      </View>
    );
  }
  _renderFlatListItem = (data) => {
    return (<View  style={Styles.itemViewStyle}>
      <TouchableWithoutFeedback onPress={() => {  }}>
        <View>
          <Text style={ [Styles.itemTestStyle,{color:'#333'},{fontFamily:'PingFangSC-Regular'},{fontSize:17} ]}>{data.item.key}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>)
  }
}

