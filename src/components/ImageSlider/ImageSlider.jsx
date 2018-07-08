import React from 'react';
import './ImageSlider.css'

class ImageSlider extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            currentImage: 0
        }
    }

    createSlider()
    {
        return (
            <img src={ this.props.images[this.state.currentImage].url } className="w-100" alt={ 'alt_image' } />
        )
    }

    nextImage()
    {
        var nextImage = this.state.currentImage + 1
        if(nextImage < this.props.images.length)
        {
            this.setState({
                currentImage: nextImage
            })
        }
    }

    previousImage()
    {
        var previousImage = this.state.currentImage - 1
        if(previousImage >= 0)
        {
            this.setState({
                currentImage: previousImage
            })
        }
    }

    render()
    {
        return (
            <div className="position-relative">
                { this.createSlider() }
                <h4 className="position-absolute sticky-top text-white">
                    Image { this.state.currentImage + 1 } of { this.props.images.length }
                </h4>
                <div className="row position-absolute w-100 m-0 overlay-buttons-position">
                    <div className="col pointer btn-background" onClick={ ()=> this.previousImage() }></div>
                    <div className="col pointer btn-background" onClick={ ()=> this.nextImage() }></div>
                </div>
            </div>
        )
    }
}

export default ImageSlider
