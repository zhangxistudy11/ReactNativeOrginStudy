import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TouchableWithoutFeedback } from 'react-native';
import Styles from '../Style/Styles';


export default class MyListItem extends React.PureComponent {

  render() {
    return (
      <FlatList 
        style = {Styles.flatListStyle}
        data={[{ key: '只给你问' }, { key: 'b' },{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' }]}
        renderItem={this._renderFlatListItem}
        ItemSeparatorComponent = {() => (<View style={Styles.separator}></View>)}

      />
    );

  }

  _renderFlatListItem = (data) => {
    return (<View  style={Styles.itemViewStyle}>
      <TouchableWithoutFeedback onPress={() => { this.clickItem(data) }}>
        <View>
          <Text style={ [Styles.itemTestStyle,{color:'#333'},{fontFamily:'PingFangSC-Regular'},{fontSize:17} ]}>{data.item.key}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>)
  }
  clickItem(data){
   console.log('sss')
  }
}

