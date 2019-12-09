import React from 'react';
import PropTypes from 'prop-types';
import styles from './CircularMacroBar.module.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const CircularMacroBar = ({currentVal,goalVal,unit}) => (
  <>
     <CircularProgressbar value={currentVal/goalVal*100} text={`${currentVal.toFixed(0)+unit}`}  styles={buildStyles({
          // Text size
          textSize: '16px',
          // Colors
           pathColor: `#a9d3b4`,
        })}/>
  </>
);

CircularMacroBar.propTypes = {};

CircularMacroBar.defaultProps = {};

export default CircularMacroBar;
