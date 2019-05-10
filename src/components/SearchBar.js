import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = { text: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmitTerm(this.state.text);
    };

    onInputChange = (event) => {
        return this.setState({text: event.target.value});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui icon input fluid">
                        <input type="text" placeholder="Search for Images" value={this.state.text} onChange={this.onInputChange} style={{ fontSize: '22px' }} />
                        <i className="search icon" />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;