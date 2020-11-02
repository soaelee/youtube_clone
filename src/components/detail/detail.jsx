import React from 'react';
import styles from './detail.module.css';

const Detail = ({ video }) => (
    <section className={styles.detail}>
        <iframe
            className={styles.video}
            type="text/html"
            title="youtube video player"
            width="100%"
            height="450px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allowFullScreen
        ></iframe>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.chennelTitle}</h3>
        <pre className={styles.description}>{video.snippet.description}</pre>

    </section>
);

export default Detail;