import React, {createContext, useReducer} from 'react'

import AppReducer from './AppReducer'


const initialState = {
    filter: '',
    recipes: [

            {
                id: 1,
                title: 'Palacinke',
                image: 'https://www.recepti.com/images/stories/kuvar/pite-i-testa/02935-testo-za-palacinke.jpg',
                description: 'Uzmite dublju plastičnu posudu i u nju sipajte brašno, dodajte jaja i oko 2 dl mleka. Probajte da umutite i ako ne ide dodajte još malo mleka.'
            },

            {
                id: 2,
                title: 'Torta',
                image: 'https://www.recepti.com/img/recipe/8385-torta-pahuljica.jpg',
                description: 'Umutiti bjelanca sa šećerom, dodati brašno i prašak za pecivo. Smjesu izliti u kalup, obložen papirom za pečenje, pa peći na 200 C oko 30 minuta. Prokuhati 100 ml mlijeka i vanilin šećer. Pečen biskvit odvojiti od papira, izbockati pa preliti vrelim mlijekom. Ostaviti da se ohladi.'
            },

            {
                id: 3,
                title: 'Slana torta',
                image: 'https://www.recepti.com/img/recipe/46620-slana-rozen-torta.jpg',
                description: 'Krastavčiće i šunku iseći na sitne komade. Kačkavalj izrendati ako nije već sečen na listiće.'
            },
            {
                id: 4,
                title: 'Musaka sa pečenim paprikama',
                image: 'https://www.recepti.com/img/recipe/46629-musaka-sa-pecenim-paprikama.jpg',
                description: 'Pečenu papriku oljuštiti, očistiti od semenki i staviti u cetku da se ocedi (ako se koristi paprika iz zamrzivača najbolje je da se, noć pre pravljenja jela, paprika izvadi i stavi u cetku da se dobro iscedi). Šargarepu, crni luk, beli luk i šampinjone staviti u secko i usitniti. Peršun iseckati sitno. Kačkavalj krupno narendati.'
            }
    ]
}


//create context
export const GlobalContext = createContext(initialState);


//Provider Component

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)


    //Actions
    function deleteRecipe(id) {
        dispatch({
            type: 'DELETE_RECIPE',
            payload: id
        })
    }


    function addRecipe(recipe) {

        dispatch({
            type: 'ADD_RECIPE',
            payload: recipe
        })

    }

    function updateRecipe(recipe) {
        dispatch({
            type:'UPDATE_RECIPE',
            payload: recipe
        })
    }


    function setFilter(filter) {
        dispatch({
            type:'SET_FILTER',
            payload: filter
        })
    }

    return <GlobalContext.Provider 
        value={{
            recipes: state.recipes,
            deleteRecipe,
            addRecipe,
            updateRecipe,
            setFilter,
            filter: state.filter
        }}        
    >
        {children}    
    </GlobalContext.Provider>
    


}
