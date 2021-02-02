import React, {useContext, useEffect, useState} from 'react'
import Recipe from './Recipe'

import styled from 'styled-components'

import {GlobalContext} from '../store/GlobalState'

const Content = ({setModal}) => {


    const {recipes, filter} = useContext(GlobalContext)

    const [filterResults, setFilterResults] = useState([])

        useEffect(() => {
            const res = recipes.filter(rec => 
                    rec.title.toLowerCase().includes(filter.toLowerCase().trim())
             )
            setFilterResults(res)
        }, [filter,recipes])

    return (
        <ContentWrapper>
            <div className='innerWrapper'>               

               {filterResults.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
                
                
                <div onClick={() => {setModal(true)}} className='addRecipe'>
                    +
                </div>
            </div>
        </ContentWrapper>
    )
}

export default Content


const ContentWrapper = styled.div`
    height: calc(100vh - 60px);    
    width: 100%;
    
    background: whitesmoke;
    
    .addRecipe {
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 5;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background: #ac72ac;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
        &:hover {
            filter: brightness(90%);
        }
    }

    .innerWrapper {
        height: 100%;
        width: 100%;
        overflow: auto;
    }
`