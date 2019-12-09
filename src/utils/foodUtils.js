export const listOfmealNames = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Snack'
  ] 
export const countMacroTotals = (data)=> {
    let calories = 0;
    let proteins = 0;
    let carbs = 0;
    let fats = 0;
    let weight = 0;

 if (data.length>0) {
  
      data.forEach(item => {
        
        proteins += item.food.componentvalues_set.protein_g /100 * item.weight;
        carbs += item.food.componentvalues_set.carbs_g /100 * item.weight;
        fats += item.food.componentvalues_set.fat_g /100 * item.weight;
        calories +=  item.food.componentvalues_set.energy_kj / 100 * item.weight /  4.184;
        weight += item.weight
      })
    }
  
     const totals = {
      calories,
        proteins,
        carbs,
        fats,
        weight
  
    }
    return totals
}

export const countFoodMacro = (item)=> {
    let calories = 0;
    let proteins = 0;
    let carbs = 0;
    let fats = 0;
    let weight = 0;
   
    if (item) {

  
        proteins += item.food.componentvalues_set.protein_g /100 * item.weight;
        carbs += item.food.componentvalues_set.carbs_g /100 * item.weight;
        fats += item.food.componentvalues_set.fat_g /100 * item.weight;
        calories +=  item.food.componentvalues_set.energy_kj / 100 * item.weight /  4.184;
        weight += item.weight
      
    }
     const totals = {
      calories,
        proteins,
        carbs,
        fats,
        weight
  
    }
    return totals
   
  }

  export const convertFoodMacros = (item) => {
      return {
        proteins : item.food.componentvalues_set.protein_g,
        carbs :item.food.componentvalues_set.carbs_g,
        fats : item.food.componentvalues_set.fat_g,
        calories : item.food.componentvalues_set.energy_kj /  4.184,
        weight: -1
      }
  } 

  export const kjToKcal = kj => kj/4.184 