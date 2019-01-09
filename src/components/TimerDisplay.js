import React, { Component } from 'react';

const leftPad = (val) =>{
    if (val < 10) return `0${val}`;

    return `${val}`
}

export default class TimerDisplay extends Component{
    render(){
        return(
            <div>
                <h2 className = "text-center">{`${leftPad(props.currentTime.get('hours'))}:${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}</h2>
            </div>
        )
    }
}