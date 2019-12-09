import React from 'react';
import PropTypes from 'prop-types';
import styles from './MealSummaryCard.module.css';
import Card from '../Card/Card';
import MacroInfo from '../MacroInfo/MacroInfo';
import { Row, Column } from 'simple-flexbox';

const MealSummaryCard = ({title,macros,onClick}) => {
   //console.log(macros)
 

  return (
    <div onClick={onClick} className={styles.MealSummaryCard}>
 
      <Row horizontal="space-between">
        <Column>
              <h4  className={styles.DishTitle}>{title}</h4>
              <MacroInfo macros={macros} />
              
        </Column>
    
      </Row>
  </div>
  );

   }
   MealSummaryCard.propTypes = {};

MealSummaryCard.defaultProps = {};

export default MealSummaryCard;
