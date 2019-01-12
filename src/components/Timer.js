import React, { Component } from 'react';
import TimerDisplay from './TimerDisplay';
import SetTimer from './SetTimer';
import moment from 'moment';
import * as timerStates from '../timerStates'

export default class Timer extends Component {

    constructor(){
        super();
        this.state = {
            currentTime: moment.duration(25, 'minutes'),
            baseTime: moment.duration(25, 'minutes'),
            timerState: timerStates.NOT_SET,
        }
         this.setBaseTime = this.setBaseTime.bind(this);
    }

    setBaseTime(newBaseTime){
        this.setState({
            baseTime: newBaseTime,
            currentTime: newBaseTime,
        })
    }

    render(){
        return(
            <div className = "timer">
            <TimerDisplay currentTime ={this.state.currentTime} />
            <SetTimer 
            baseTime = {this.state.baseTime}
            setBaseTime = {this.setBaseTime}
            />
            </div>
        )
    }
}