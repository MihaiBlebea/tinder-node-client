import React from 'react';
import axios from 'axios';
import config from './../../config';
import { PageTitle } from './../../components/components';

class NewsPage extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            news: null
        }
    }

    componentDidMount()
    {
        this.getNews()
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

    createMatches()
    {
        if(this.isStateSet())
        {
            if(this.state.news.matches.length > 0)
            {
                return this.state.news.matches.map((match)=> {
                    return (
                        <div>
                            New Match
                        </div>
                    )
                })
            } else {
                return (
                    <p>No new Matches</p>
                )
            }
        }
    }

    createMessages()
    {
        if(this.isStateSet())
        {
            if(this.state.news.inbox.length > 0)
            {
                return this.state.news.inbox.map((message)=> {
                    return (
                        <div>
                            Message
                        </div>
                    )
                })
            } else {
                return (
                    <p>No new Messages</p>
                )
            }
        }
    }

    createBlocks()
    {
        if(this.isStateSet())
        {
            if(this.state.news.blocks.length > 0)
            {
                return this.state.news.blocks.map((block)=> {
                    return (
                        <div>
                            Block
                        </div>
                    )
                })
            } else {
                return (
                    <p>No new Blocks</p>
                )
            }
        }
    }

    isStateSet()
    {
        return (this.state.news !== null) ? true : false;
    }

    render()
    {
        return (
            <div>
                <PageTitle>News page</PageTitle>
                { this.createMatches() }
                <hr />
                { this.createMessages() }
                <hr />
                { this.createBlocks() }
            </div>
        )
    }

}

export default NewsPage;
