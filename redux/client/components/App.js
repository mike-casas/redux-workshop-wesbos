import { connect } from  'react-redux';
import * as actionsCreator from '../actions/actionsCreator';
import { bindActionCreators } from 'redux';
import PhotoGrid from './PhotoGrid';

const mapStateProps = (state)=>(
    {
        posts: state.posts,
        comments: state.comments
    }
)

const mapDispatchProps= (dispatch)=>(
    bindActionCreators(actionsCreator, dispatch)
);

const App = connect(mapStateProps, mapDispatchProps)(PhotoGrid);
export default App;