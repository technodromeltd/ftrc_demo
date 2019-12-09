import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodayStats.module.css';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {defaultSettings} from '../../store/defaultSettings'
import {Row,Column} from 'simple-flexbox'
import CircularMacroBar from '../CircularMacroBar/CircularMacroBar';
import Card from '../Card/Card';
const TodayStats = ({totals}) => {

    return (
   
<Card>
  
      <div className={styles.TodayStats}>
        <h4 className={styles.title}>Summary of today</h4>
        <Row horizontal="space-evenly">
          <Column>
            <span>Calories</span>
            <div className={styles.padding}>
            <CircularMacroBar currentVal={totals.calories} goalVal={defaultSettings.dailyTarget.calories} unit="kcal"/>
            </div>
          </Column>
          <Column>
            <span>Proteins</span>
            <div className={styles.padding}>
            <CircularMacroBar currentVal={totals.carbs} goalVal={defaultSettings.dailyTarget.carbs} unit="g"/>
            </div>
          </Column>
          <Column>
            <span>Carbs</span>
            <div className={styles.padding}>
            <CircularMacroBar currentVal={totals.carbs} goalVal={defaultSettings.dailyTarget.carbs} unit="g"/>
            </div>
          </Column>
          <Column>
           <span>Fats</span>
            <div className={styles.padding}>
            <CircularMacroBar currentVal={totals.fats} goalVal={defaultSettings.dailyTarget.fats} unit="g"/>
            </div>
          </Column>

        </Row>
        
    </div>
</Card>
    
    )

}
TodayStats.propTypes = {};

TodayStats.defaultProps = {};

export default TodayStats;
