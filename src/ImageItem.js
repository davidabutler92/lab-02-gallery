import React, { Component } from 'react'
import './App.css';

export default class ImageItem extends Component {
    render() {
        return (
            <div className="article">
                <img className="image" alt={this.props.title} src={this.props.url}></img>
                <div>{this.props.title}</div>
                <div>Horns: {this.props.horns}</div>
            </div>
        )
    }
}
