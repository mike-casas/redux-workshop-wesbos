import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class Photo extends Component {
    render() {
        const {post, comments, i} = this.props;
        return <figure className="grid-figure">
            <div className="grid-photo-wrap">
              <Link to={`/view/${post.code}`}>
                <img className="grid-photo" src={post.display_src} alt={post.caption} />
              </Link>
              <ReactCSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                <span key={post.likes} className="likes-heart">{post.likes}</span>
              </ReactCSSTransitionGroup>
            </div>
            <figcaption>
              <p>{post.caption}</p>
              <div className="control-buttons">
                <button onClick={() => this.props.increment(i)} className="likes">
                  &hearts; {post.likes}
                </button>

                <Link className="button" to={`/view/${post.code}`}>
                  <span className="comment-count">
                    <span className="speech-bubble" />

                    {comments[post.code] ? comments[post.code].length : 0}
                  </span>
                </Link>
              </div>
            </figcaption>
          </figure>;
    }
}

export default Photo;