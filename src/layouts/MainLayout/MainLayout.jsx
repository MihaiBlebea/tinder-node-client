import React from 'react';
import './MainLayout.css'

class MainLayout extends React.Component
{
    render() {
        return (
            <div className="container">
                <div className="my-5">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default MainLayout;
