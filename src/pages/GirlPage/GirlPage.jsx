import React from 'react';
import axios from 'axios';
import config from './../../config';
import { Gallery, PageTitle } from './../../components/components';

class GirlPage extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            girl: null
        }
    }

    componentDidMount()
    {
        this.getGirl(this.props.match.params.id)
    }

    getGirl(id)
    {
        axios.get(config.api + '/girl/' + id).then((result)=> {
            this.setState({ girl: result.data })
        })
    }

    createPageTitle()
    {
        return (this.state.girl !== null) ? this.state.girl.name : 'Girl page'
    }

    loadingGallery()
    {
        if(this.state.girl !== null)
        {
            return (
                <Gallery images={ this.state.girl.photos } />
            )
        }
    }

    render()
    {
        return (
            <div>
                <PageTitle>{ this.createPageTitle() }</PageTitle>
                { this.loadingGallery() }
            </div>
        )
    }
}

export default GirlPage;
