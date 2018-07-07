import React from 'react';
import { GirlCard } from './../components';


const GirlCards = (props)=> {

    var createGirlCards = (props)=> {
        return props.girls.map((girl, index)=> {
            return (
                <div className="col-md-4 mb-3" key={ 'girl_' + index }>
                    <GirlCard name={ girl.name }
                              images={girl.images}
                              bio={ girl.bio }
                              birth={ girl.birth_date }
                              tinder={ girl.tinder_id }
                              liked={ girl.liked } />
                </div>
            )
        })
    }

    return (
        <div className="row">{ createGirlCards(props) }</div>
    )
}

export default GirlCards;
