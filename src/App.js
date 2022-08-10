import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  name = "roopesh";
  mykey=process.env.REACT_APP_MY_API;
  state ={
    progress:0
  }
  currProgress = (element) =>{
    this.setState({progress:element});
  }
  render() {
    return (
      <>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => this.currProgress(100)}
      />
      <NavBar/>
      <Routes>
        <Route exact path="/business" element={<News  mykey={this.mykey} currProgress={this.currProgress} key="business" category="business"/>}/>
        <Route exact path="/entertainment" element={<News  mykey={this.mykey} currProgress={this.currProgress} key="entertainment" category="entertainment"/>}/>
        <Route exact path="/home" element={<News  mykey={this.mykey} currProgress={this.currProgress} key="general" category="general"/>}/>
        <Route exact path="/" element={<News  mykey={this.mykey} currProgress={this.currProgress} key="general" category="general"/>}/>
        <Route exact path="/health" element={<News  mykey={this.mykey} currProgress={this.currProgress} key="health" category="health"/>}/>
        <Route exact path="/science" element={<News  mykey={this.mykey} currProgress={this.currProgress} key="science" category="science"/>}/>
        <Route exact path="/sports" element={<News  mykey={this.mykey} currProgress={this.currProgress} key="sports" category="sports"/>}/>
        <Route exact path="/technology" element={<News  mykey={this.mykey} currProgress={this.currProgress} key="technology" category="technology"/>}/> 
        <Route exact path="/about" element={<About key="about"/>}/> 

      </Routes>
      </>
    )
  }
}

