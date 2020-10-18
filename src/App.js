import React from 'react'
import "./assets/css/style.css"

function App({title}){
    return (

        <div >
            <div className = "bg-red-600 text-white p-5 border ">
                {title}
            </div>
        </div>
        
    )
}

export default App