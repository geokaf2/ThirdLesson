import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCityWeather } from '../actions/index';


class SearchBar extends Component {

    // Set component state in order to get the input value

    constructor(props){
        super(props);

        this.state = {term: ''};

        // pass scope context of this to the function - 
        // TAKE THE EXISTING FUNCTION
        // BIND TO THIS AND REPLACE THE FUNCTION
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term:event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault(); // no perform the default post action of subimt the page
        
        //Create Action
        this.props.fetchCityWeather(this.state.term);
        this.setState({term: ''}); // clear search input
    }

    render(){
        return (
            <div>
                <form className="input-group"
                    onSubmit={this.onFormSubmit}>
                    <input 
                        placeholder="Get a five date forecast..."
                        className="form-control"
                        value={this.state.term}
                        onChange={this.onInputChange}/>
                    <span className="input-group-btn">
                        <button 
                            type="submit" 
                            className="btn btn-secondary">Submit</button>
                    </span>
                </form>                
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchCityWeather}, dispatch);
}

//we pass null cause we dont want to map state to props
export default connect(null, mapDispatchToProps) (SearchBar);