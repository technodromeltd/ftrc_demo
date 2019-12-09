import React from 'react';
import PropTypes from 'prop-types';
import styles from './MacroInfo.module.css';
import { Row } from 'simple-flexbox';

const MacroInfo = ({macros}) => {
  // const weightString =  (macros.weight === -1) ? "" : ", Weight: "+macros.weight+"g" ;
  const proteinString = (macros.proteins != null) ? "Proteins: "+macros.proteins.toFixed(0)+"g, " : "";
  const fatString = (macros.fats != null) ? "Fats: "+macros.fats.toFixed(0)+"g, " : "";
  const carbsString = (macros.carbs != null) ? "Carbs: "+macros.carbs.toFixed(0)+"g  " : "";
  const caloriessString = (macros.calories != null) ? macros.calories.toFixed(0)+"kcal, " : "";

  return (
  <div className={styles.MacroInfo}>
     <p>
 
        {caloriessString}
        {proteinString}
        {fatString}
        {carbsString}
        
          {/* {weightString} */}
      </p>
  </div>
);
  }
MacroInfo.propTypes = {};

MacroInfo.defaultProps = {};

export default MacroInfo;
