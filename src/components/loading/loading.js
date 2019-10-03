import React from 'react'
import loadingImage from './../../images/icon.svg'

const Loading = props => {
    return (
        <div className={(props.isFull ? 'fullPage' : '') + ' fullPageCenterContainer' }>
            <img className="loadingIcon" src={loadingImage} alt="loading"/>
        </div>
    )
}

export default Loading