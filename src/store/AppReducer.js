export default (state, action) => {

    switch (action.type) {
        case 'DELETE_RECIPE':
            return {
                ...state,
                recipes: state.recipes.filter(rec => rec.id !== action.payload)
            }
            break;
    
        case 'ADD_RECIPE':
            let newRecipes = [...state.recipes]            
            newRecipes.unshift(action.payload)
                
            return {
                ...state,
                recipes: newRecipes
            }
            break;
        case 'SET_FILTER':
        
                
            return {
                ...state,
                filter: action.payload
            }
            break;
        case 'UPDATE_RECIPE':
            
            let recipesCopy = state.recipes.map(recipe => {
                if(recipe.id === action.payload.id) {
                    return action.payload
                }else{
                    return recipe
                }
            })
            
            


            return {
                ...state,
                recipes: recipesCopy
            }
            break;
    
        default:
            break;
    }

}