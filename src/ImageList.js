import React, { Component } from 'react'
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {

    render() {
        const filteredImages = this.props.images.filter((image) => {
            if(!this.props.filter) return true; 

            if(image.horns === Number(this.props.filter)) return true 

            if(image.keyword === this.props.filter) return true
            
            return false 
        });

        return (
            <>
            <div className="articles section">
            { 
                filteredImages.map(image => 
                <ImageItem 
                url={image.url}
                title={image.title}
                horns={image.horns}
                /> )
            }
            </div>
            </>
        )
    }
}