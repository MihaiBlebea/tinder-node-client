import React from 'react';
import axios from 'axios';
import config from './../../config.js';
import { GirlCards, PageTitle, Pagination, SearchForm } from './../../components/components';

class GirlsPage extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            girls: [],
            limit: null,
            page: null,
            pages: null,
            total: null,
        };
    }

    componentDidMount()
    {
        this.props.history.listen((location, action) => {
            this.getGirls(location.search.split('=')[1])
        })
        this.getGirls(1)
    }

    getGirls(page)
    {
        axios.get(config.api + '/girls?page=' + page).then((result)=> {
            console.log(result.data)
            this.setState({
                girls: result.data.docs,
                limit: result.data.limit,
                current: result.data.page,
                pages: result.data.pages,
                total: result.data.total
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    searchGirl(term)
    {
        axios.post('http://localhost:3000/girls/search', { term: term }).then((result)=> {
            this.setState({
                girls: result.data,
                limit: null,
                current: null,
                pages: null,
                total: null
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    handleSearchFormSubmit(event)
    {
        this.searchGirl(event)
    }

    handlePageChange(page)
    {
        this.getGirls(page)
    }

    createPagination()
    {
        if(this.state.limit !== null)
        {
            return (
                <Pagination limit={ this.state.limit }
                            current={ this.state.current }
                            pages={ this.state.pages }
                            total={ this.state.total }
                            onChangePage={ (page)=> this.handlePageChange(page) } />
            )
        }
    }

    render()
    {
        return (
            <div>
                <PageTitle>Girls page</PageTitle>
                <SearchForm submit={ (ev)=> this.handleSearchFormSubmit(ev) } />
                <div className="row justify-content-end mb-5">
                    <div className="col-md-3">
                        { this.createPagination() }
                    </div>
                </div>
                <GirlCards girls={ this.state.girls } />
                <div className="row justify-content-center mt-5">
                    <div className="col-md-3">
                        { this.createPagination() }
                    </div>
                </div>
            </div>
        )
    }
}

export default GirlsPage;
