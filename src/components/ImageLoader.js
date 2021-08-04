import React from 'react'
import './Imageloader.css'

function ImageLoader({darkModeXolat2}) {
    return (
        <div className={darkModeXolat2 === true ?"darkImageLoader" : "imageLoader"}>
            
        </div>
    )
}

export default ImageLoader
