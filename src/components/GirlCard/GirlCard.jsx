import React from 'react';
import { Button, ImageSlider } from './../components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import unescapejs from 'unescape-js'
import config from './../../config.js';
import { zodiac } from './../../services/services';


function GirlCard(props)
{
    var status = ()=> {
        return (props.liked !== null) ? props.liked : 'N/A';
    }

    var parseDate = (string)=> {
        var date = moment(string)
        return date.format("dddd, MMMM Do YYYY")
    }

    var parseZodiacSign = (birthDate) => {
        var birth = moment(birthDate)
        var day = birth.day()
        var month = birth.month()
        return zodiac.getZodiacSign(day, month)
    }

    var getAge = (birthDate) => {
        var now = moment()
        var birth = moment(birthDate)
        return now.diff(birth, 'years')
    }

    var like = ()=> {
        axios.get(config.api + '/like/' + props.tinder).then((result)=> {
            console.log(result.data)
        }).catch((error)=> {
            console.log(error)
        })
    }

    var pass = ()=> {
        axios.get(config.api + '/pass/' + props.tinder).then((result)=> {
            console.log(result.data)
        }).catch((error)=> {
            console.log(error)
        })
    }

    return (
        <div className="card">
            <div className="card-header text-center">
                <h5 className="card-title mb-0">{ props.name }</h5>
            </div>
            <ImageSlider images={ props.images } />
            <div className="card-body">
                <p>
                    { unescapejs(props.bio) }
                </p>
                <p>Status: { status() }</p>
                <p>Date of birth:  { parseDate(props.birth) }</p>
                <p>Age: { getAge(props.birth) } years old</p>
                <p>Sign: <span className="card__text--capitalize">{ parseZodiacSign(props.birth) }</span></p>
            </div>

            <div className="card-footer">
                <div className="row justify-content-around">
                    <Button onButtonClick={ like }>Like</Button>
                    <Link to={ '/girl/' + props.tinder } >
                        <Button>Profile</Button>
                    </Link>
                    <Button onButtonClick={ pass }>Pass</Button>
                </div>
            </div>
        </div>
    )
}

export default GirlCard
