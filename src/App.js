import React from 'react';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';
import images from './data.js';

export default class App extends React.Component {

state = {
    filter: ''
}

clickHandler = e => {
    this.setState ({
        filter: e.target.value
    })
}

render() {
  return (
    <>
    <main className="body">
      <div className=".header">
        <Header />
      </div>
      <div>
        <ImageList images={images} filter={this.state.filter}/>
        <Dropdown clickHandler={this.clickHandler}/>
      </div>
    </main>
    </>
  );
}

}

