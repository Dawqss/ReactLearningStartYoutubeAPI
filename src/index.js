import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/Searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const ApiKey = 'AIzaSyBZF_CGtqxpqPLhYvIJS3cnoCEfLaC_4jI';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfborads');

    }

    videoSearch(term) {
        YTSearch({key: ApiKey, term: term}, (videos) => {
            this.setState({
                videos : videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (<div className={'row'}>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
        </div>
    );
    }
};

ReactDom.render(<App />, document.querySelector('.container'));




