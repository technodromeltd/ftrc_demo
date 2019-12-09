import React,{Component} from 'react';
import PropTypes, { exact } from 'prop-types';
import styles from './AddFood.module.css';

import axios from '../../axios'
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import {TextField} from '@material-ui/core'
import ResultCard from '../../components/ResultCard/ResultCard';
import {connect} from 'react-redux'
import * as actions from '../../store/actions/actions'

//Debouncer for seach results
const getSearchResults = (searchText) =>  axios.get('/food/name/'+encodeURIComponent(searchText))
const searchAPIDebounced = AwesomeDebouncePromise(getSearchResults, 500);

class AddFood extends Component {

  inputRef = React.createRef()

  state ={
    loading:false,
    results: [],
    currentItemId: null,
    currentItemWeight:null,
    searchbarIsEmpty:true

  }

   searchTextChangeHandler = async (event) =>{
      //console.log(event.target.value)
      const searchText = event.target.value
     
  
      if(searchText) {
        this.setState({loading:true})
        
        const results = await searchAPIDebounced(searchText)
    
        this.setState({
          results: results.data,
          loading:false,
          searchbarIsEmpty:false
        })
     
        if(results.data.length > 3) {               // if multiple results, scroll to starting point   
          setTimeout(this.scrollToSearchBar(),800)  // Scroll to results with delay to let page render
        }
      }
      else {
        this.setState({
          results: [],
          loading:false,
          searchbarIsEmpty:true
        })
        
      } 
   

  }

  resultItemClickHandler = (id,weight) =>{
    
    this.props.onAddFoodToDiary(id,weight,1111,this.props.mealName)
    
  }

  onWeightChange = (id,weight) => {
    
    this.setState({
      currentItemId: id,
      currentItemWeight: weight
    })
  }

  clearInputClickHandler = () => {
    console.log(this.inputRef.current)
    this.inputRef.current.value=""
    this.inputRef.current.focus()
    this.setState({
      results: [],
      loading:false,
      searchbarIsEmpty:true
    })
  
  }
  scrollToSearchBar = () => window.scrollTo(0, this.inputRef.current.offsetTop)   


 render() {

  const resultsList = []

  if(this.state.results.length < 1) {
    if(this.state.loading) {
      resultsList.push(<p key="1">Loading...</p>) }
    else if ( this.state.searchbarIsEmpty === false) {
      resultsList.push(<p key="1">No results</p>) }
  }

  else {
    this.state.results.map(item => {
      let weight = 100
     
      if(item.food.food_id === this.state.currentItemId) weight = this.state.currentItemWeight 

      let classes = ""
      let added =false
      if (this.props.addedFoodIds.includes(item.food.food_id)) {
         classes= styles.alreadyAdded 
         added =true
      }
        console.log(this.props.addedFoodIds.includes(item.food.food_id))
        resultsList.push(
        <ResultCard classes={classes}
        added={added}
        weight={weight} 
        onWeightChange={this.onWeightChange} 
        onClick={() => this.resultItemClickHandler(item.food.food_id,weight)} 
        key={item.food.food_id} 
        title={item.food.food_name} 
        food={item} />)
      
    })
  }
   return   (
    <div className={styles.AddFood}>
      <div className={styles.SearchBarDiv}>
        <input ref={this.inputRef} 
        
        placeholder="Add new food" 
        onChange={(event) => this.searchTextChangeHandler(event)} 
        className={styles.SearchBar} type="text" />
        <label className={styles.clearText} onClick={this.clearInputClickHandler}> clear</label>
      </div>
      {resultsList}
     </div>
   );

  } 
    
}
AddFood.propTypes = {};

AddFood.defaultProps = {};


 const mapDispatchToProps = dispatch => {
   return {
    
     onAddFoodToDiary: (foodId,weight,userId,dishName) => dispatch(actions.addFoodToDiary(foodId,weight,userId,dishName))
   }
 }


export default connect(undefined,mapDispatchToProps)(AddFood);
