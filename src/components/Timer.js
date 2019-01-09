import React, { Component } from 'react';
import TimerDisplay from './TimerDisplay';
import SetTimer from './SetTimer';
import moment from 'moment'

export default class Timer extends Component {

    constructor(){
        super();
        this.state = {
            currentTime: moment.duration(25, 'minutes'),
            baseTime: moment.duration(25, 'minutes'),
        }
    }

    render(){
        return(
            <div className = "timer">
            <TimerDisplay currentTime ={this.state.currentTime} />
            <SetTimer />
            </div>
        )
    }
}