import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Icon, TouchableWithoutFeedback } from 'react-native';
import CommonStyles from '../../CommonPart/Style/Styles';
import { Button } from 'beeshell';
import { Calendar } from 'beeshell';
import styles from "./MeiTuanStyle"

const componentStyles = StyleSheet.create({
  spacingH: {
    marginRight: 10,
  },

  spacingV: {
    marginBottom: 12
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  }
})

export default class MeiTuanButton extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <View style={[CommonStyles.container, { marginTop: 100 }]}>
        {this._renderEventView(0)}
        {/*  {this._renderCalendarScreen()} */}


      </View>
    );
  }


  _renderEventView = () => {

    return (
      <ScrollView
        style={styles.body}>
        <Text style={styles.header}>预定义样式666</Text>
        <View >
          <View >
            <Button
              testID='btn1'
              style={[componentStyles.spacingH, componentStyles.spacingV]}
              type='default'
              size='sm'
              onPress={() => {
                this.setState({
                  count: this.state.count + 1
                })
              }}>
              默认 default
            </Button>
            <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='primary' size='sm' textColorInverse>首选项 primary</Button>
            <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='success' size='sm'>成功 success</Button>
            <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='info' size='sm'>一般信息 info</Button>
            <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='warning' size='sm'>警告 warning</Button>
            <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='danger' size='sm'>危险 danger</Button>
            <Button type='text' size='sm'>纯文本 text</Button>
          </View>
          {this.state.count ? <Text testID='text'>点击了按钮 {this.state.count}</Text> : null}

          <Text style={styles.header}>尺寸</Text>
          <View style={styles.panel}>
            <View style={componentStyles.row}>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='primary' size='lg' textColorInverse>大按钮</Button>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='default' size='lg'>大按钮</Button>
            </View>
            <View style={componentStyles.row}>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='primary' size='md' textColorInverse>默认尺寸</Button>
              <Button style={[componentStyles.spacingV]} type='default' size='md'>默认尺寸</Button>
            </View>

            <View style={componentStyles.row}>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='primary' size='sm' textColorInverse>小按钮</Button>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='default' size='sm'>小按钮</Button>
            </View>

            <Button type='primary' size='md' textColorInverse>默认尺寸拉伸</Button>
          </View>
          <Text style={styles.header}>禁用/激活状态44444</Text>

          <View style={styles.panel}>
            <View style={componentStyles.row}>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='default' size='sm' disabled>默认 default</Button>
              <Button style={[componentStyles.spacingH, componentStyles.spacingV]} type='primary' size='sm' textColorInverse disabled>首选项 primary</Button>
              <Button style={[componentStyles.spacingH]} type='success' size='sm' disabled>成功 success</Button>
              <Button style={[componentStyles.spacingH]} type='text' size='sm' disabled>纯文本 text</Button>
            </View>
          </View>
          <Text style={styles.header}>自定义3333样式与内容</Text>

          <View style={styles.panel}>
          <View style={[componentStyles.row, { alignItems: 'center' }]}>
            <Button
              style={[componentStyles.spacingH, { borderRadius: 50 }]}
              type='primary'
              size='md'
              textColorInverse>
              圆角
            </Button>
            
            <Button
              style={[componentStyles.spacingH]}
              type='info'
              size='sm'>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#fff', marginLeft: 5 }}>搜索111</Text>
              </View>
            </Button>

            <Button
              style={[{ borderColor: 'blue' }]}
              type='default'
              size='sm'>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'blue', marginLeft: 5 }}>新增</Text>
              </View>
            </Button>

          </View>
        </View>

        </View>




      </ScrollView>



    )
  }


}