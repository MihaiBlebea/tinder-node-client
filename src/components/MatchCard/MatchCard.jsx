import React from 'react';


const MatchCard = (props)=> {

    return (
        <div className="card">
            <div class="card-body">
                <div className="row">
                    <div class="col-md-2">
                        <img class="mr-3 w-100" src={ props.image } alt="Generic placeholder image" />
                    </div>

                    <div className="col">
                        <h5 class="mt-0">{ props.name }</h5>
                        { props.bio }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MatchCard
