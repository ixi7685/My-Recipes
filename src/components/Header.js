import React, {useContext} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {GlobalContext} from '../store/GlobalState'

const Header = () => {

    let {setFilter} = useContext(GlobalContext)

    let history = useHistory()

    function setFilterHandler(e) {
        console.log(1111)
        history.push({pathname:'/'})
        setFilter(e.target.value)
    }


    function goHome() {
        // history.push({pathname:'/'})
        history.goBack()
    }

    return (
        <HeaderWrapper>
            <div onClick={goHome} className='logo'>
                My Recipes
            </div>

            <div style={{marginLeft:'50px'}}>
                <input className="filter_input" onChange={setFilterHandler} type="search" placeholder="Search"/>
            </div>


        </HeaderWrapper>
    )
}

export default Header


const HeaderWrapper = styled.div`
        box-shadow: 0px 5px 3px rgba(0,0,0,.5);
        background-color: #ac72ac;
        color: #fff;
        height: 60px;
        z-index: 2;
        display: flex;
        align-items: center;
        .filter_input {
            width:300px;
            height:40px;
            border:none;
            border-radius: 5px;
            padding:10px;
            font-size: 1rem;
            outline: none;
        }

        .logo {
            margin: 0px 10px;
            font-style: italic;
            cursor: pointer;
        }
`