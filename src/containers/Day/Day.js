import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Day.module.css';
import DateNav from '../../components/DateNav/DateNav';

import TodayStats from '../../components/TodayStats/TodayStats';

import {connect} from 'react-redux'

import {Link} from 'react-router-dom';
import * as actions from '../../store/actions/actions'
import Spinner from '../../components/Spinner/Spinner';
import {countMacroTotals,listOfmealNames} from '../../utils/foodUtils'

import MealSummaryCard from '../../components/MealSummaryCard/MealSummaryCard';

class Day extends Component  {

  componentDidMount() {
     this.props.onInitDiary();
  }
  
  
  render() {
    if (!this.props.diary) {
      return <Spinner />
    }
    const getMeal = (mealName) => this.props.diary.filter(item => item.dish_name === mealName)
    const mealList = []
    listOfmealNames.forEach(mealName => {
      
      const macros = countMacroTotals(getMeal(mealName)) 
      mealList.push( <Link key={mealName} to={"meal/"+mealName}> <MealSummaryCard title={mealName} type="dish" macros={macros} /></Link>)
      
    }); 
    const totals = countMacroTotals(this.props.diary)
   
    return (
   
      <div className={styles.Day}>
        <DateNav />
        
        <TodayStats totals={totals}/>
        {mealList}
     </div>
   );
    
  }
}
 

Day.propTypes = {};

Day.defaultProps = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(Day);
