import React from 'react'
import stringHelper from './../../../helpers/stringHelper'

const NotFound = (props) =>{

    return (
        <div className="fullPage">
            <div className="fullPageCenterContainer">
                {stringHelper.ucFirst(props.pokemon)} not found
            </div>
         </div>
    )
}

export default NotFound