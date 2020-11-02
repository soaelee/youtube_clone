import React, { useState, useEffect, useCallback } from 'react';
import styles from './app.module.css';
import Detail from './components/detail/detail';
import Search from './components/search/search';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  //videos는 비디오 목록 상태 변경할 것, selectedVideo는 선택된 비디오 상태 변경할 것
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  //처음과 youtube 개체의 변화가 있을 때만 effect작용 일어나도록, mostPopular 목록 받아오기
  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos));
  }, [youtube]);

  //Search항목에서 onSearch가 발생할 경우, youtube의 search 발동!
  const handleSearch = useCallback(query => {
    youtube
      .search(query)
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  }, [youtube]);

  //videoitem에서 onVideoClick이 발생할 경우, selectedVideo 값을 변경하여서 Detail 컴포넌트를 보이게함
  const selectVideo = (video) => {
    setSelectedVideo(video);
  }
  return (
    <div className={styles.app}>
      <Search onSearch={handleSearch} />
      <section className={styles.content}>
        {/* selectedVideo의 값이 있을 경우, 그를 감싸고 있는 container도 함께 묶는다. */}
        {selectedVideo && (
          <div className={styles.detail}>
            <Detail video={selectedVideo} />
          </div>
        )}
        {/* component에는 직접 classname을 줄 수 없으므로 div로 묶은 후에 스타일을 준다 || */}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          // selectedVideo의 값이 있을 경우, list 스타일, 아니면 grid 스타일(item에서 조정)
          />
        </div>
      </section>
    </div>
  );

}

export default App;
