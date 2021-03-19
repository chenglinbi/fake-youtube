import React from 'react'

class SearchBar extends React.Component {
    state = {
        term: ''
    }
    
    onInputChange = (event) => {
        this.setState({ term : event.target.value })
        
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }
    componentDidUpdate() {
        
    }
    render() {
        return (
                        
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input onChange={this.onInputChange} value={this.state.term} placeholder="Search" type="text" className="form-control" />
                <div class="input-group-append">
                    <button onClick={this.onFormSubmit} className="btn btn-outline-secondary" type="button"><i style={{fontSize:'15px'}} className="material-icons">search</i></button>
                </div>
            </form>
        )
    }
}

export default SearchBar