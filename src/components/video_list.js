import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  /**
   * Map() creates a new array from an array variable.
   * So videoItems is the map of props.videos (jamak) which 
   * will return many video (singular).
   */
  const videoItems = props.videos.map((video) => {
    // It needs to return a key that is unique.
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect} 
      video={video} 
      key={video.etag} />
    )
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList;