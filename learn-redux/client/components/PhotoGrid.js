import React, { Component } from 'react';
import Photo from './Photo';
class PhotoGrid extends Component {
    render() {
        return (
            <div className='photo-grid'>
                { this.props.posts.map((item, index)=> <Photo key= {index} i={index} {...this.props} post={item}/> )}
            </div>
        );
    }
}

export default PhotoGrid;