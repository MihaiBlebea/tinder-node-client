import React from 'react';
import axios from 'axios';
import moment from 'moment';
import config from './../../config';


class TimeLeft extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            time: null
        }
    }

    componentDidMount()
    {
        this.getTimeLeft()
    }

    getTimeLeft()
    {
        axios.get(config.api + '/wait').then((result)=> {
            this.setState({
                time: {
                    likes: result.data.likes,
                    wait: result.data.wait
                }
            })
        }).catch((error)=> {
            console.log(error)
        })
    }

    isStateSet()
    {
        return (this.state.time !== null) ? true : false;
    }

    createLikesLeft()
    {
        if(this.isStateSet())
        {
            return this.state.time.likes
        }
    }

    createTimeLeft()
    {
        if(this.isStateSet())
        {
            var limit = moment(this.state.time.wait);
            var now = moment();
            return limit.diff(now, 'hours')
        }
    }

    render()
    {
        return (
            <div>
                <div>{ this.createLikesLeft() } likes left | { this.createTimeLeft() } hours left</div>
            </div>
        )
    }
}

export default TimeLeft;
