import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';



class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async (term) => {
        console.log('In SearchBar onTermSubmit  term:',term);
        const response = await youtube.get('/search',{
            params: {
                q: term,
            }
        });

        console.log('In App onTermSubmit   response: ',response);
        this.setState({ videos: response.data.items });
    };


    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={ this.onTermSubmit } />
                <VideoList videos={ this.state.videos } />
                <br />
                I have { this.state.videos.length } videos.
            </div>
        );
       
    }
}

export default App;