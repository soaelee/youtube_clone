import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

//list에서는 videoItem를 전달해주기만하고, 아무런 기능이 없음
const VideoList = ({ videos, onVideoClick, display }) =>(
        <ul className={styles.videos}>
            {videos.map(video =>
                <VideoItem
                    video={video}
                    key={video.id}
                    onVideoClick={onVideoClick}
                    display={display}
                />)}
        </ul>
);

export default VideoList;