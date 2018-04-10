import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoDetail from './component/video_detail'

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';

const API_KEY = 'AIzaSyC4D2DuvN1uihXMpCMYHQgJzFMbYDbGAsc';

//Creat a new Component. This component should produce some HTML

class App extends Component{
  constructor(props){
    super(props);
    this.state ={videos:[] };

    YTSearch({key:API_KEY, term:'surfboard'},(videos)=>{
      this.setState({videos});
    });
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.video[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (in the DOM);
ReactDOM.render(<App />,document.querySelector('.container'));
