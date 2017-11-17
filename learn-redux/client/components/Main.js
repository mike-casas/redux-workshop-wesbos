import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PhotoGrid from './PhotoGrid';

class Main extends Component {
    render() {
        console.log(this.props)
        return <div>
            <h1>
              <NavLink to="/">ReduxInstagram</NavLink>
            </h1>
            {React.cloneElement(this.props.children,{ data: this.props.post})}
          </div>;
    }
}

export default Main;