import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail'

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';

const API_KEY = 'AIzaSyC4D2DuvN1uihXMpCMYHQgJzFMbYDbGAsc';

//Creat a new Component. This component should produce some HTML

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      videos:[],
      selectedVideo: null
     };

    YTSearch({key:API_KEY, term:'surfboard'},(videos)=>{
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelected={selectedVideo=>this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (in the DOM);
ReactDOM.render(<App />,document.querySelector('.container'));
