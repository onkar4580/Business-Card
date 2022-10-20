import React from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

import data from './components/data'
import './index.css'

function App() {
    const Data = data.map((d) => {
        return (
            <Main 
                key={d.key} 
                id={d.id} 
                name={d.name}
                imageurl={d.imageurl}
                about ={d.about}
                interest ={d.interest}
                />
        )
    })
    // const Data2 = data.map((d) => {
    //     return (
    //         <Footer key={d.key}/>
    //     )
    // })
    return (
        <div className="app-class">
            <Navbar />
            {Data}    
        </div>
    )
}

export default App