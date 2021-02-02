import React, {useContext, useRef} from 'react'
import styled from 'styled-components'

import {GlobalContext} from '../store/GlobalState'


const Modal = ({setModal}) => {

    const {addRecipe} = useContext(GlobalContext)

    let title = useRef(null)
    let url = useRef(null)
    let desc = useRef(null)


    const closeModalHandler = () => {
        setModal(false)
    }


    const saveRecipeHandler = () => {

        if(
            title.current.value == '' && 
            url.current.value == '' && 
            desc.current.value == ''
        ) {
            return
        }

        addRecipe(
            {
                id: Math.round(Math.random() * 10) + +new Date(),
                title: title.current.value,
                image: url.current.value,
                description: desc.current.value,
            }
        )
        
        setModal(false)
    }


    return (
        <ModalWraper onClick={closeModalHandler}>
            
            <div className='modalDiv' onClick={(e) => {e.stopPropagation()}}>
                <h4>Add new recpie</h4>
                <div className='inputGroup'>
                    <span>Title:</span>
                    <input ref={title} type='text' />
                </div>
                <div className='inputGroup'>
                    <span>Image URL:</span>
                    <input ref={url} type='text' />
                </div>
                <div className='inputGroup'>
                    <span>Description:</span>
                    <textarea ref={desc}></textarea>
                </div>

                <div>
                    <button onClick={closeModalHandler}>close</button>
                    <button onClick={saveRecipeHandler}>save</button>
                </div>
            </div>


        </ModalWraper>
    )
}

export default Modal


const ModalWraper = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    .modalDiv {
        width: 500px;
        height: 600px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 5px 5px 3px rgba(0,0,0,.5);
        padding: 20px;


        .inputGroup {
            width: 100%;
            min-height: 60px;
            display: flex;
            flex-direction: column;

            input {
                width: 100%;
                height: 35px;
                border: 1px solid #ccc;
                padding: 10px;
                border-radius: 10px;
                outline: none;
                font-size: 1rem;
            }

            textarea {
                width: 100%;
                height: 300px;
                border: 1px solid #ccc;
                padding: 10px;
                border-radius: 10px;
                outline: none;
                font-size: 1rem;
            }
        }

    }

    
`