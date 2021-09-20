import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import VideoItem from './VideoItem';


class App extends React.Component {
    state = { 
                videos: [],
                selectedVideo: null
            };

    componentDidMount() {
        this.onTermSubmit('Superman');
    };

    onTermSubmit = async (term) => {
        console.log('In SearchBar onTermSubmit  term:',term);
        const response = await youtube.get('/search',{
            params: {
                q: term,
            }
        });

        console.log('In App onTermSubmit   response: ',response);
        this.setState({ 
                        videos: response.data.items,
                        selectedVideo: response.data.items[0]
                     });
    };

    onVideoSelect = (video) => {
        console.log('From the App.   video=',video);
        this.setState({ selectedVideo: video });
    };


    render() {
        return (
            // 16 available columns wide for semantic-ui grid system
            <div className="ui container">
                <SearchBar onFormSubmit={ this.onTermSubmit } />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={ this.state.videos } />               
                        </div>
                    </div>
                </div>
                <br />
                { this.state.videos.length } videos.
            </div>
        );
       
    }
}

export default App;