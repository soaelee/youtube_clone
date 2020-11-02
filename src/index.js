import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube-axios';
import axios from 'axios';

//App에서 호출하면 state 변경할 때마다 새로 호출!
const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const youtube = new Youtube(httpClient);
ReactDOM.render(
  <App youtube={youtube} />,
  document.getElementById('root')
);
