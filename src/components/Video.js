import React, { Fragment }  from 'react';
import ReactPlayer from 'react-player';
import '../css/videostyles.css';



const Video = (props) =>
{
    const myVideos = props.myVideos;
    console.log(myVideos);

        return(
            <Fragment>
            <div className = "player-wrapper">
                <ReactPlayer
                className = 'react-player'
                url = {props.flagOn}
                controls = {true}
                />
                {props.flagTitle}
            </div>
            </Fragment>
        );
}

export default Video;