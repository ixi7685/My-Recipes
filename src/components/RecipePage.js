import React, {useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'


import {GlobalContext} from '../store/GlobalState'


const RecipePage = () => {

    let {id} = useParams()

    const {recipes, updateRecipe} = useContext(GlobalContext)

    const [recipe, setRecipe] = useState({
        id: -1,
        title: '',
        description: '',
        image: ''
    })


    let [editable, setEdit] = useState(false)
    
    useEffect(() => {
        let rec = recipes.filter(recipe => recipe.id == id)[0]
        setRecipe(rec)
        
    }, [recipes])

    
    const changeHandler = (e) => {
        let property = e.target.name

        let recipeCopy = {...recipe}

        recipeCopy[property] = e.target.value

        setRecipe(recipeCopy)
    }
    
    const saveHandler = () => {
        updateRecipe(recipe)
        setEdit(false)
    }


    return (
        <div>

            <InnerWrapper edit={editable}>


                <ImageDiv style={{backgroundImage: `url(${recipe.image})`, backgroundSize:'cover', backgroundPosition: '50% 50%'}}>    
                </ImageDiv>
                
                <input onChange={changeHandler} name="title" disabled={!editable} className='title' value={recipe.title} type='text'/>

                <textarea onChange={changeHandler} name="description" disabled={!editable} className='description' value={recipe.description}></textarea>


                <div className='btnContainer'>
                
                    <button className='btn' onClick={() => {setEdit(!editable)}}>Edit</button>
                    {editable && <button className='btn' onClick={saveHandler}>Save</button>}
                </div>
                

            </InnerWrapper>
        </div>
    )
}

export default RecipePage


const ImageDiv = styled.div`
    width: 100%;
    height: 200px;

`

const InnerWrapper = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    margin: 10px auto;


    .title {
        width: 300px;
        height: 40px;
        font-size: 1rem;
        border-radius: 5px;
        border: ${props => props.edit ? '1px solid #ac72ac' : 'none'};
        padding: 10px;
        margin: 10px auto;
        outline: none;
    }

    .description {
        font-size: 1rem;
        width: 100%;
        height: 500px;
        border-radius: 5px;
        border: ${props => props.edit ? '1px solid #ac72ac' : 'none'};
        padding: 10px;
        margin: 10px auto;
        outline: none;
        resize: none;
    }


    .btnContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .btn {
        width: 70px;
        height: 40px;
        line-height: 40px;
        background: #ac72ac;
        color: #fff;
        text-align: center;
        display: block;
        outline: none;
        border-radius: 10px;
        font-size: 1rem;
        margin: 10px;
        cursor: pointer;
    }
`