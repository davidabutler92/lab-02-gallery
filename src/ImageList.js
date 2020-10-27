import React, { Component } from 'react'
import ImageItem from './ImageItem.js';
import images from './data.js';

export default class ImageList extends Component {
    render() {
        return (
            <div className="articles">
            { 
                images.map(image => 
                <ImageItem 
                url={image.url}
                title={image.title}
                horns={image.horns}
                /> )
            }
            </div>
        )
    }
}