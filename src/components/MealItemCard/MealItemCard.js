import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MealItemCard.module.css';
import Card from '../Card/Card';
import MacroInfo from '../MacroInfo/MacroInfo';
import { Row, Column } from 'simple-flexbox';

import {connect} from 'react-redux'
import * as actions from '../../store/actions/actions'
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import {countFoodMacro} from '../../utils/foodUtils'
import {Delete} from '@material-ui/icons'

const DEBOUNCER_TIMEOUT = 1000

class MealItemCard extends Component {
constructor(props) {
  super(props)
  const macros = countFoodMacro(this.props.food)

  this.state = {
    weight: this.props.food.weight,
    macros,
  }

}
  //Debouncer funcs to update mealItem weight in db
  updateWeight = (weight) => this.props.onChangeMealItemWeight(this.props.id,weight)
  updateWeightDebounced = AwesomeDebouncePromise(this.updateWeight, DEBOUNCER_TIMEOUT);

   
  onWeightChange = (event) => {
    const weight = event.target.value
    const updatedFoodItem = this.props.food
    updatedFoodItem.weight = weight
    const macros = countFoodMacro(updatedFoodItem)
    this.setState({
      weight,
      macros
    })
    this.updateWeightDebounced(weight)

  }

  deleteMealItemHandler = () => {
    this.props.onDeleteMealItem(this.props.id)
  }
  render() {
    const {food} = this.props
   

  return (
    <Card >
 
      <Row horizontal="space-between">
        <Column>
              <h4 >{food.food.food_name}</h4>
              <MacroInfo macros={this.state.macros} />
        </Column>
        <Column  alignItems="end" vertical="space-between">
        <div className={styles.WeightInput}>
          <input onChange={(e) => this.onWeightChange(e)} value={this.state.weight}/>
          <label className={styles.label}>gr</label>
        </div>
       
        <Delete  style={{transform:'2.0'}} className={styles.delete} color="error" onClick={this.deleteMealItemHandler}/>
        </Column>
    
      </Row>
  </Card>
  );
  
}
   }
   MealItemCard.propTypes = {};

MealItemCard.defaultProps = {};
const mapStateToProps = (state) => {
  return {
      diary : state.diary,
     
  }

 };
 const mapDispatchToProps = dispatch => {
   return {
    
    onChangeMealItemWeight: (id,weight) => dispatch(actions.editMealItem(id,weight)),
    onDeleteMealItem: (id) => dispatch(actions.deleteMealItem(id))
   }
 }

export default connect(mapStateToProps,mapDispatchToProps)(MealItemCard);
