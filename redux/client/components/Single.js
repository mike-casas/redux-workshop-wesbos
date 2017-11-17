import React from 'react';
import Photo from './Photo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsCreator from '../actions/actionsCreator';
import Comments from './Comments';


const mapStateProps =(state)=>(
    {
        posts: state.posts,
        comments: state.comments
    }
)

const mapDispatchProps = (dispatch)=>(
    bindActionCreators(ActionsCreator, dispatch)
)

const Single = (props) => {
    const postId = props.posts.findIndex((p)=> p.code == props.match.params.id);
    const post= props.posts[postId]
    return (
        <div className="single-photo">
            <Photo i={postId} post={post} {...props} />
            <Comments postCode={post.code} {...props}/>
        </div>
    );
};

export default connect(mapStateProps, mapDispatchProps)(Single);