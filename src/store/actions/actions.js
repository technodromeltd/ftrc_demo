import actionTypes from './actionsTypes';
import axios from '../../axios';
import {API_KEY} from '../../private/const'

export const editMealItem = (id,weight) => {
    return dispatch => {
        axios.post('diary/edit/'+API_KEY, {
        id,
        weight,
    
    }).then(response => {
        console.log(response.status)
         dispatch(getDiary())
    })
}
} 

export const deleteMealItem = id => {
    return dispatch => {
        axios.get(API_KEY+'/diary/delete/'+id)
        .then(res => {
            console.log(res.status)
            dispatch(getDiary())
        })
    }
}
export const setDiary = (diary) => {
    return {
        type: actionTypes.SET_DIARY,
        diary:diary 
    }
}


export const getDiary = () => {
    return dispatch => {
        axios.get('diary/1111')
        .then(response => {
            dispatch(setDiary(response.data))
          })
          .catch(e => {
              console.log(e)
          })

    }
}

export const addFoodToDiary = (foodId,weight,userId,dishName) => {
    return dispatch => {
        axios.post('diary/add/'+API_KEY, {
            user_id: userId,
            food_id: foodId,
            weight,
            dish_name: dishName
        }).then(response => {
            console.log(response.status)
            dispatch(getDiary())
        }).catch(e => {
            console.log(e)
        })
    }
} 

export const updateUserSettings = (data) => {
    return dispatch => {
        
        axios.post('user/edit/'+API_KEY, {
            user_id: data.userId,
            calorie_goal: data.calorieGoal,
            protein_goal: data.proteinGoal,
            carb_goal: data.carbGoal,
            fat_goal: data.fatGoal,
        })
        .then(response => {
            console.log(response.status)
            
        }).catch(e => {
            console.log(e)
        })

    }
}


export const loginSuccess = (userData) => {
    return {
        type: actionTypes.LOGIN_USER,
        userDetails:userData 
    }
}
export const tryLogin = (userName, password) => {
    return dispatch => {
       //TODO connect to auth server for login and get UserID in return
       const userId = 1111 

       if(userName === 'test' && password == 'test') { // TODO fix when auth implemented
     
        axios.get(API_KEY+'/user/'+userId)
        .then(response => {
            dispatch(loginSuccess(JSON.parse(response.data)))
          }).catch(e => {
            console.log(e)
        })
          
       }
    }
}
