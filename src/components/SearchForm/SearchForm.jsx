import React from 'react';

class SearchForm extends React.Component
{
    handleInputChange()
    {
        const value = this.refs.input.value;
        this.props.submit(value);
    }

    render()
    {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" ref="input" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"
                            type="button"
                            onClick={ ()=> this.handleInputChange() }>Button</button>
                </div>
            </div>
        )
    }
}

export default SearchForm
