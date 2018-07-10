import React from 'react';

class Pagination extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            current: null,
            limit: null,
            pages: null,
            total: null
        }
    }

    componentDidMount()
    {
        this.setState({
            current: this.props.current,
            limit: this.props.limit,
            pages: this.props.pages,
            total: this.props.total
        })
    }

    handleValueChange(event)
    {
        let newCurrent = event.target.value.split('/')[0]
        if(newCurrent > 0 && newCurrent <= this.state.pages)
        {
            this.setState({
                current: newCurrent
            })
            this.props.onChangePage(newCurrent)
        }
    }

    nextPage()
    {
        let nextPage = parseInt(this.state.current) + 1
        if(nextPage <= this.state.pages)
        {
            this.setState({
                current: nextPage
            })
            this.props.onChangePage(nextPage)
        }
    }

    previousPage()
    {
        let previousPage = parseInt(this.state.current) - 1
        if(previousPage > 0)
        {
            this.setState({
                current: previousPage
            })
            this.props.onChangePage(previousPage)
        }
    }

    render()
    {
        return (
            <div className="input-group">
                <input type="text"
                       className="form-control"
                       value={ this.state.current + '/' + this.state.pages }
                       onChange={ (ev)=> this.handleValueChange(ev) } />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={ ()=> this.previousPage() } >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className="btn btn-outline-secondary" onClick={ ()=> this.nextPage() } >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Pagination
