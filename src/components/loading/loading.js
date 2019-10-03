import React from 'react'
import loadingImage from './../../images/icon.svg'
import './loading.css'

const Loading = props => {
    return (
        <div className={(props.isFull ? 'loadingFull' : '') + ' loadingContainer' }>
            <img className="loadingIcon" src={loadingImage} alt="loading"/>
        </div>
    )
}

export default Loading