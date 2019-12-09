import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header'
import Day from './containers/Day/Day';
import { Route,Switch,Redirect} from 'react-router-dom';
import Meal from './containers/Meal/Meal';
import Login from './containers/Login/Login'
import UserView from './containers/UserView/UserView';
import {connect} from 'react-redux'
function App(props) {
  const loggedIn = (props.loggedUserId != null)
  // const loggedIn = true

  return (
    <div className={styles.App}>  
  
      {loggedIn ?  <Header /> :  <Redirect to="/login"/>         } 
     
      <div className={styles.MainDiv}>

      <Switch> 
    
            <Route path="/login" component={Login} />         
            <Route path="/user" component={UserView} />         
            <Route path="/meal/:mealName" component={Meal} />         
            <Route path="/" component={Day} />
      </Switch>    
      </div>
  
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    loggedUserId : state.loggedUserId
  }
} 
export default connect(mapStateToProps)(App)