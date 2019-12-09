import actionTypes from '../actions/actionsTypes'

const initialState= {
    diary: null,
    error: false,
    userDetails: {
        userId:null,
        userName: "",
        calorieGoal:null,
        carbGoal:null,
        proteinGoal:null,
        fatGoal:null,

        
    },
    loggedUserId:null

}

const reducer = (state = initialState,action) => {

    switch(action.type) {
        case actionTypes.ADD_FOOD_TO_DIARY:
            return {
                ...state       

            }
        case actionTypes.SET_DIARY:
            return {
                ...state,
                diary:action.diary
            }
        case actionTypes.UPDATE_USER_GOALS: // TODO combine with login_user
            return {
                ...state,
                userDetails: {...state.userDetails,
                    calorieGoal: action.userDetails.calorie_goal,
                    carbGoal: action.userDetails.carb_goal,
                    proteinGoal: action.userDetails.protein_goal,
                    fatGoal: action.userDetails.fat_goal,
                }
            }
        case actionTypes.LOGIN_USER:
          
            return {
                ...state,
                userDetails: {
                    userId: action.userDetails.user_id,
                    userName: action.userDetails.username,
                     calorieGoal: action.userDetails.calorie_goal,
                     carbGoal: action.userDetails.carb_goal,
                     proteinGoal: action.userDetails.protein_goal,
                     fatGoal: action.userDetails.fat_goal,
                },
                loggedUserId: action.userDetails.user_id
            }

            case actionTypes.LOGOUT_USER:
                return {
                    ...state,
                    loggedUserId: null
                }
        default:
            return {...state}
                
            
    }
};

export default reducer;