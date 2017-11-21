import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDzgBNmqF4ZTHzIF9qdtLb_GWstpOOTzUE';

// Class Component
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null 
    }

    this.videoSearch('witcher')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        // can also do this.setState({ videos }) in ES6 
        // if name is the same ie. {videos: videos}
        videos: videos,
        selectedVideo: videos[0] 
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos = {this.state.videos} />
      </div>
    );
  }
}

// Take component's generated HTML into the DOM (page)
ReactDOM.render(<App />, document.querySelector('.container'))


// -- Stateless Component (producing HTML) -- //
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }