import React,{Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Meal.module.css';

import {connect} from 'react-redux'
import Card from '../../components/Card/Card';


import * as actions from '../../store/actions/actions'
import {countMacroTotals} from '../../utils/foodUtils'
import Spinner from '../../components/Spinner/Spinner';

import AddFood from '../AddFood/AddFood';
import MealItemCard from '../../components/MealItemCard/MealItemCard';
import MealSummaryCard from '../../components/MealSummaryCard/MealSummaryCard';

class Meal extends Component {


  componentDidMount() {
    if(!this.props.diary) this.props.onInitDiary()
  }


  render() {
    const mealName = this.props.match.params.mealName
    let foods = []
    let totals={}
    let foodIds=[]

    if(!this.props.diary) {
      return <Spinner />
    }
    const meal = this.props.diary.filter(item => item.dish_name === mealName)
    totals = countMacroTotals(meal)
    meal.forEach(item => {

     foodIds.push(item.food.food_id)
     foods.push( 
     <MealItemCard 
     food={item} 
     key={item.id} 
     title={item.food.food_name} 
     id={item.id}  
     />)
    
    }); 
   

    return (
      <div className={styles.Meal} ref={this.topPageRef}>
        <div  className={styles.mains}>

        <Card onClick={()=> this.props.history.goBack()}>
          Go Back
        </Card>
        <MealSummaryCard title={mealName}  macros={totals}/>
        {(foods.length === 0) ? (<p>No foods</p>) : <p>Your {mealName} contains of </p>}
         
        {foods}
        
        </div>
        <AddFood addedFoodIds={foodIds} mealName={mealName} />

      </div>
    );
  }
}


Meal.propTypes = {};

Meal.defaultProps = {};


const mapStateToProps = (state) => {
  return {
      diary : state.diary,
     
  }

 };
 const mapDispatchToProps = dispatch => {
   return {
     onInitDiary: () => dispatch(actions.getDiary())
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Meal);
