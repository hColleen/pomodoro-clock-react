import React, { Component } from 'react';
import TimerDisplay from './TimerDisplay';
import SetTimer from './SetTimer';
import moment from 'moment';
import * as timerStates from '../timerStates'
import TimerButton from './TimerButton';

export default class Timer extends Component {

    constructor(){
        super();
        this.state = {
            currentTime: moment.duration(25, 'minutes'),
            baseTime: moment.duration(25, 'minutes'),
            timerState: timerStates.NOT_SET,
            timer: null,
        }
         this.setBaseTime = this.setBaseTime.bind(this);
         this.startTimer = this.startTimer.bind(this);
         this.reduceTimer = this.reduceTimer.bind(this);
    }

    setBaseTime(newBaseTime){
        this.setState({
            baseTime: newBaseTime,
            currentTime: newBaseTime,
        })
    }

    startTimer(){
        this.setState({
            timerState: timerStates.RUNNING,
            timer: setInterval(this.reduceTimer, 1000),
        })

    }

    reduceTimer(){
        const newTime = moment.duration(this.state.currentTime);
        newTime.subtract(1, 'second')
        this.setState({
            currentTime: newTime,
        })
    }

    render(){
        return(
            <div className = "timer">
            <TimerDisplay currentTime ={this.state.currentTime} />
            <TimerButton startTimer = {this.startTimer} />
            {
                (this.state.timerState !== timerStates.RUNNING)
                &&
                (
                    <SetTimer 
                    baseTime = {this.state.baseTime}
                    setBaseTime = {this.setBaseTime}
                    />
                )
            }
            </div>
        )
    }
}