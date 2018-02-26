import React, { Component } from 'react';


class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }


    render() {
        return (
            <div className={'form-control col-12'}>
                <input type="text"
                   value={this.state.term}
                   onChange={event => this.onInputChange(event.target.value)} className={'form-control py-3 px-5'}
                />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default Searchbar;