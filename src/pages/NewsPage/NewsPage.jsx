import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from './../../config';
import { PageTitle, MatchCard } from './../../components/components';


class NewsPage extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            news: null,
            matches: [],
            messages: []
        }
    }

    componentDidMount()
    {
        this.getNews()
        this.getMatches()
    }

    getNews()
    {
        axios.get(config.api + '/news').then((result)=> {
            this.setState({
                news: result.data
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    getMatches()
    {
        axios.get(config.api + '/history').then((results)=> {
            this.setState({
                matches: results.data.matches,
                messages: results.data.messages
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    createMatches()
    {
        if(this.state.matches.length > 0)
        {
            return this.state.matches.map((match)=> {
                return (
                    <div className="mb-2">
                        <Link to={ '/girl/' + match.person._id } >
                            <MatchCard bio={ match.person.bio }
                                       name={ match.person.name }
                                       image={ match.person.photos[0].url }/>
                        </Link>
                    </div>
                )
            })
        }
    }

    render()
    {
        return (
            <div>
                <PageTitle>News page</PageTitle>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        { this.createMatches() }
                    </div>
                </div>
            </div>
        )
    }

}

export default NewsPage;
