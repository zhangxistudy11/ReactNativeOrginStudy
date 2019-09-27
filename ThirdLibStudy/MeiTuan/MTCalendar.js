import React, { Component } from 'react';
import { View, Text, ScrollView, NavigatorIOS, FlatList, TouchableWithoutFeedback } from 'react-native';
import Styles from '../../CommonPart/Style/Styles';
import { Button } from 'beeshell/dist/components/Button';
 import { Calendar } from 'beeshell';

export default class MTCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
         this.state = {
                        date: '2019-10-20',
                    }
      }
    render() {
        return (
            <View style={[Styles.container, { marginTop: 100 }]}>
                    {this._renderEventView(0)}
                {/*  {this._renderCalendarScreen()} */}


            </View>
        );
    }
    _renderCalendarScreen() {
                return (
                    <View>
                         <Calendar
                            date={this.state.date}
                            startDate={'2018-04-11'}
                            endDate={'2030-06-22'}
                            onChange={(date) => {
                                this.setState({
                                    date
                                });
                            }}
                        /> 
                    </View>
                )
            }
          
        
    _renderEventView = () => {
      
        return (
                  <ScrollView
       >
        <Text >基础</Text>
        <Calendar
          date={this.state.date}
          startDate={'2018-04-11'}
          endDate={'2020-06-22'}

          onChange={(date) => {
            this.setState({
              date
            })
          }}>
      </Calendar>

      <Text >自定义渲染项</Text>
        <Calendar
          date={this.state.date}
          startDate={'2018-04-11'}
          endDate={'2020-06-22'}
          renderItem={(item, date, desc) => {
            return (
              <Text>{item.dateModel.format('D')}</Text>
            )
          }}
          onChange={(date) => {
            this.setState({
              date
            })
          }}>
      </Calendar>
      </ScrollView>

            
             
        )
    }
    
      
}