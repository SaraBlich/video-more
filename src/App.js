import React, {Component} from 'react';
import './App.css';
import Video from './components/Video.js';
import VideoList from './components/VideoList.js';


class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            myVideos: [],
            myURLs: '',
            myTitles: '',
            myDescription: '',
            flagOn: 'http://www.youtube.com/watch?v=0J4h0xdY78A&t=2842s',
            flagTitle: 'The Witcher 3: Wild Hunt'

        };
        this.changeFlag = this.changeFlag.bind(this);
    }

    changeFlag = (flag, title) =>
  {
    this.setState({
      flagOn: flag,
      flagTitle: title
    });
  }

    componentDidMount()
    {
        fetch('./database.json')
        .then(res => res.json())
        .then(result => {
          let URLs = result.map(result => result.url)
          console.log(URLs)
          let myTitles = result.map(result => result.title)
          let myDescription = result.map(result => result.description);
               this.setState({
                   myVideos: result,
                   myURLs: URLs,
                   myTitles: myTitles,
                   myDescription: myDescription
               });
            });
    }
    render()
    {

      return(
          <div id = "container">
              <Video 
              myVideos = {this.state.myVideos}
              flagOn = {this.state.flagOn}
              flagTitle = {this.state.flagTitle}/>
              <VideoList
              myVideos = {this.state.myVideos}
              changeFlag = {this.changeFlag}/>
          </div>);
    }
}


export default App;
