import React, { memo } from 'react';
import styles from './video_item.module.css'

//props.video.snippet이 반복 deconstructing으로 줄이기: (props) => ({video}) => ({video: {snippet}})
const VideoItem = memo(
    ({ video, video: { snippet }, onVideoClick, display }) => {
        //props의 display에 따라서 className 지정한다.
        const displayType = display === 'list' ? styles.list : styles.grid;
        return (
            <>
                <li className={`${styles.video} ${displayType}`} onClick={() => onVideoClick(video)}>
                    <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} />
                    <div className={styles.metadata}>
                        <p className={styles.title}>{snippet.title}</p>
                        <p className={styles.channel}>{snippet.channelTitle}</p>
                    </div>
                </li>
            </>
        )
    }
)
export default VideoItem;