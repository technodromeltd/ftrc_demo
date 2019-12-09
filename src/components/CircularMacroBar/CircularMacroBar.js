import React from 'react';
import PropTypes from 'prop-types';
import styles from './CircularMacroBar.module.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const CircularMacroBar = ({currentVal,goalVal,unit}) => {
  const color = "#a9d3b4"
  const colorOver = "#bd4b57"
  return (
  <>
     <CircularProgressbar value={currentVal/goalVal*100} text={`${currentVal.toFixed(0)+unit}`}  styles={buildStyles({
          // Text size
          textSize: '16px',
          // Colors
           pathColor: (currentVal/goalVal < 1) ? color : colorOver,
        })}/>
  </>
);
}
CircularMacroBar.propTypes = {
  currentVal:PropTypes.number,
  goalVal:PropTypes.number,
  unit:PropTypes.string,

};

CircularMacroBar.defaultProps = {};

export default CircularMacroBar;
