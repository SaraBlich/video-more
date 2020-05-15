import React, {Component} from 'react';
import '../css/videoList.css';


class VideoList extends Component
{

    render()
    {
        const myVideos = this.props.myVideos;
        
        
        return(
            myVideos.map(url => (
                <table
            
            className = "player-list-wrapper"
            key = {url.url}>
               <tbody>
                   <th className = 'video-title'>{url.title}</th>
                    <tr className = 'video-description'>{url.description} </tr>
                    <tr>
                    <button
                        className = 'video-img'
                        onClick = {e => this.props.changeFlag(`${url.url}`, `${url.title}`)} href = '#'>
                        <img src = {url.thumbnail}
                        alt = 'youtube thumbnail'/>
                    </button>
                    </tr>
                </tbody>
            
            </table>
            ))
        );
    }
}

export default VideoList;
