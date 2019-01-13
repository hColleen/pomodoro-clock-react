import React from 'react';
import * as timerStates from '../timerStates';

const leftPad = (val) => {
  if (val < 10) return `0${val}`;

  return `${val}`;
}

const TimerDisplay = (props) => (
  <div>
    <div className="row center-block" id="breakDisplay">
      {
        (props.timerState === timerStates.COMPLETE)
        && <iframe title = "Break Time" className="center-block youtube-responsive-width" height="315" src="https://www.youtube.com/embed/gVKEM4K8J8A?rel=0;autoplay=1&controls=0&showinfo=0" allow = "autoplay"></iframe>
      }
    </div>
    <div className="row" id = "timeDisplay">
      <h2 className="text-center">
        {`${leftPad(props.currentTime.get('hours'))}:${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}
      </h2>
    </div>
  </div>
);

export default TimerDisplay;