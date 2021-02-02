import React, {useContext} from 'react'
import styled from 'styled-components'
import {Link, useRouteMatch} from 'react-router-dom'

import {GlobalContext} from '../store/GlobalState'


const Recipe = ({recipe}) => {


    const {deleteRecipe} = useContext(GlobalContext)

    

    function deleteMe() {
        let r = window.confirm('Are you sure to dalete this recipe?')

        if(r) {

            deleteRecipe(recipe.id)
        }

        
    }


    return (
        <RecipeWrapper>
                <div className='imageDiv' style={{background: `url(${recipe.image}) 50% 50%`, backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}>
                </div>
                <div className='descriptionDiv'>
                    <Link to={`/recipe/${recipe.id}`}><h4>{recipe.title}</h4></Link>
                    <p>
                        {recipe.description.length > 249 ? recipe.description.slice(0, 250) + ' ...' : recipe.description}
                    </p>

                    <button className='delBtn' onClick={deleteMe}>Delete</button>
                </div>
        </RecipeWrapper>
    )
}

export default Recipe


const RecipeWrapper = styled.div`
    
    max-width: 600px;
    height:200px;
    display: flex;
    overflow: hidden;
    margin: 10px auto;
    border-radius: 10px;
    background: #fff;
    box-shadow: 5px 5px 3px rgba(0,0,0,.5);
    .imageDiv {
        width: 200px;
        height: 100%;        
    }

    .descriptionDiv {
        flex: 1;
        height: 100%;
        padding: 10px;
        position: relative;

        a {
            color: #ac72ac;
        }
        
    }

    .delBtn {
        position: absolute;
        bottom: 5px;
        right: 5px;
        display: block;
        height: 30px;
        width: 70px;
        background: #e85c5c;
        color:#fff;
        text-align: center;
        line-height: 30px;
        border-radius: 5px;
        border: none;
        &:hover {
            filter: brightness(90%);
        }
        cursor: pointer;
    }

`
