import React from 'react';
import PropTypes from 'prop-types';
import styles from '../MealItemCard/MealItemCard.module.css';

import MacroInfo from '../MacroInfo/MacroInfo';
import { Row, Column } from 'simple-flexbox';
import Card from '../Card/Card';
import {AddCircle} from '@material-ui/icons'
import { countFoodMacro } from '../../utils/foodUtils';

const ResultCard = props => {
  const onChangeHandler = (event) => {
    props.onWeightChange(props.food.food.food_id, event.target.value)
  }
  const {title,onClick} = props
  const food = props.food
  food.weight = props.weight
  const macros = countFoodMacro(food)
  const addedText= (props.added) ? " - added to meal" : ""
  const addButton = (!props.added) ?  <AddCircle  style={{transform:'2.0'}} className={styles.delete} color="primary" onClick={onClick}/>
  : ""
  return (
    <Card classes={props.classes} >
  
        <Row horizontal="space-between">
          <Column>
            <h4  >{title+addedText}</h4>
            <MacroInfo macros={macros} />
          </Column>
          <Column  alignItems="end" vertical="space-between">
            <div className={styles.WeightInput}>
              <input onChange={(e)=> onChangeHandler(e)} value={props.weight}/>
              <label className={styles.label}>gr</label>
            </div>  
           {addButton}
          </Column>      
        </Row>
  </Card>
);
}

// class ResultCard extends Component {
//   constructor(props) {
//     super(props)
//     const food = this.props.food
//     food.weight = this.props.weight
//     const macros = countFoodMacro(food)
    
//     this.state = {   
//       macros,
//     }
//   }

//   onChangeHandler = (event) => {
//     this.props.onWeightChange(this.props.food.food.food_id, event.target.value)
//   }
  
//   render() {
//     const {title,onClick} = this.props

//     return (
//         <Card >
      
//             <Row horizontal="space-between">
//               <Column>
//                 <h4  >{title}</h4>
//                 <MacroInfo macros={this.state.macros} />
//               </Column>
//               <Column  alignItems="end" vertical="space-between">
//                 <div className={styles.WeightInput}>
//                 <input onChange={(e)=> this.onChangeHandler(e)} value={this.props.weight}/>
//                 <label className={styles.label}>gr</label>
//                 </div>
                
//                 <AddCircle  style={{transform:'2.0'}} className={styles.delete} color="action" onClick={onClick}/>
//               </Column>
            
//             </Row>
//       </Card>
//     );
    
    
//   }
// } 

ResultCard.propTypes = {};

ResultCard.defaultProps = {};

export default ResultCard;
