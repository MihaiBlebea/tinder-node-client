import React from 'react';
import './Gallery.css';


class Gallery extends React.Component
{
    createImageGallery()
    {
        if(this.props.images !== null && this.props.images.length > 0)
        {
            return this.props.images.map((image, index)=> {
                return (
                    <div className="col-md-4 mb-4" key={ 'image_' + index }>
                        <img src={ image.url } alt="" className="w-100 rounded img-thumbnail"/>
                    </div>
                )
            })
        }
    }

    render()
    {
        return (
            <div className="row">
                { this.createImageGallery() }
            </div>
        )
    }
}

export default Gallery;
