import React from 'react';
import Unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { image: [] };

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }
    
    async onSearchSubmit(term) {
        const response = await Unsplash.get('/search/photos',{
            params: {
                query: term
            }
        });

        return this.setState({ image: response.data.results });
    }
    
    render() {
        return (
            <div>
                <div style={{ backgroundImage: 'url(images/background-image.jpeg)', backgroundRepeat: 'none', backgroundPosition: 'center', paddingTop: '150px', paddingBottom: '150px', marginBottom: '10px' }}>
                    <div className="ui container">
                        <h1 style={{ color: '#ffffff' }}>Find the best stock photos for free</h1>
                        <div>
                            <SearchBar onSubmitTerm={this.onSearchSubmit} />
                        </div>
                    </div>
                </div>
                <div><ImageList onList={this.state.image} /></div>
            </div>
        ); 
    }
}

export default App;