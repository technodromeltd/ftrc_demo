import React from 'react';
import PropTypes from 'prop-types';
import styles from './MacroCard.module.css';
import Card from '../Card/Card';
import MacroInfo from '../MacroInfo/MacroInfo';
import { Row, Column } from 'simple-flexbox';


const MacroCard = ({title,type,macros,onClick}) => {

  const headerStyles = (type === 'dish') ? styles.DishTitle : "";
  return (
    <Card onClick={onClick}>
 
      <Row horizontal="space-between">
        <Column>
              <h4  className={headerStyles}>{title}</h4>
              <MacroInfo macros={macros} />
        </Column>
        <Column justifyContent="end" >
        <div className={styles.WeightInput}>
          <input  value={macros.weight}/>
          <label>gr</label>
        </div>
       
        <p>Delete</p>
        </Column>
       
      </Row>
  </Card>
  );

   }
MacroCard.propTypes = {};

MacroCard.defaultProps = {};

export default MacroCard;
