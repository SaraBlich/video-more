import React, {Component} from 'react';
import '../css/videoList.css';


class VideoList extends Component
{

    render()
    {
        const myVideos = this.props.myVideos;
        
        
        return(
            myVideos.map(url => (
            <ul 
            className = "player-list-wrapper"
            key = {url.url}>
               <li> 
                   <p className = 'video-title'>{url.title}</p>
                    <p className = 'video-description'>{url.description} </p>
                    <br />
                    <button 
                        className = 'video-img'
                        onClick = {e => this.props.changeFlag(`${url.url}`, `${url.title}`)} href = '#'>
                        <img src = {url.thumbnail} 
                        alt = 'youtube thumbnail'/>
                    </button>
                    <br />
                </li>
            </ul>
            ))
        );
    }
}

export default VideoList;