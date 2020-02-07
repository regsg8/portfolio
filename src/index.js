import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import DataProvider from './context/DataProvider'
import './resume.jpg'


ReactDOM.render(
    <BrowserRouter>
        <DataProvider>
            <App />
        </DataProvider>
    </BrowserRouter>
, document.getElementById('root'))

//Fix small window CSS
//Split Main component into two cards, left intro and right menu

    //animate/transition menu and resume views, turn details into cards

//Make About divs onClick instead of hover

//Add a CRUD project