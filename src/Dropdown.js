import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <>
                <div className="select">
                    <select onChange={this.props.clickHandler}>
                        <option value=''>Show All</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='100'>100</option>
                    </select>
                </div>
                <div className="select">
                    <select onChange={this.props.clickHandler}>
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
            </>
        )
    }
}
