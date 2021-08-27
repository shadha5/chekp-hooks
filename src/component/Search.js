import React from 'react'
import StarRating from './StarRating'

const search = ({searchvalue, handlesearch, searchrate,handlerate}) => {
    return (
        <div className= "header-container" >
            <h1>MOVIES APP</h1>
            <div className= "search-container" >
                <input type= "text" name= "" value={searchvalue}  className="inp" onChange= {handlesearch}/>
                  
                <StarRating rate={searchrate} handlerate= {handlerate} />
            </div>            
        </div>
    )
}

export default search
