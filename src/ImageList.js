import React, { Component } from 'react'
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    state = {
        filter: ''
    }

    clickHandler = e => {
        this.setState ({
            filter: e.target.value
        })
    }

    render() {
        const filteredImages = this.props.images.filter((image) => {
            if(!this.state.filter) return true; 

            if(image.horns === Number(this.state.filter)) return true 

            if(image.keyword === this.state.filter) return true
            
            return false 
        });

        return (
            <>
            <div className="select">
                <select onChange={this.clickHandler}>
                    <option value=''>Show All</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='100'>100</option>
                </select>
            </div>
            <div className="select">
                <select onChange={this.clickHandler}>
                    <option value=''>Show All</option>
                    <option value='narwhal'>Narwhal</option>
                    <option value='rhino'>Rhino</option>
                    <option value='unicorn'>Unicorn</option>
                    <option value='unilego'>Unilego</option>
                    <option value='triceratops'>Triceratops</option>
                    <option value='markhor'>Markhor</option>
                    <option value='mouflon'>Mouflon</option>
                    <option value='chameleon'>Chameleon</option>
                    <option value='lizard'>Lizard</option>
                    <option value='dragon'>Dragon</option>
                </select>
            </div>
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