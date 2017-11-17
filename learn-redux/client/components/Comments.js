import React,{Component} from 'react';
import { addComment } from '../actions/actionsCreator';



class Comments extends Component {
    constructor(props){
        super(props)
        this.handlerForm = this.handlerForm.bind(this);
        this.handlerRemove = this.handlerRemove.bind(this);

    }

    singleComment(i,comment){
        return <div key={i} className="comment">
            <p>
            <strong>{comment.user}: </strong>
            {comment.text}
            <button onClick={()=> this.handlerRemove(i)} className="remove-comment">
                &times;
            </button>
            </p>
        </div>;
    }

    handlerForm(e){
        e.preventDefault();
        const user = this.inputUser.value;
        const text = this.inputText.value;
        const postCode = this.props.postCode;
        this.props.addComment(postCode, user, text);
        this.form.reset();
    }
    
    handlerRemove(i){
        console.log('remove', i);
        this.props.removeComment(this.props.postCode,i)
    }

    render() {
        const props = this.props;
        return <div className="comments">
            {props.comments[props.postCode] ? props.comments[props.postCode].map(
                  (c, i) => this.singleComment(i,c)
                ) : null}
            <div>
              <form ref={(f)=> this.form = f} className='comment-form' onSubmit={this.handlerForm}>
                <input type="text" ref={t => {
                    this.inputUser = t;
                  }} placeholder="User" />
                <input type="text" ref={t => {
                    this.inputText = t;
                  }} placeholder="text" />
                <input type="submit" hidden />
              </form>
            </div>
          </div>;
    }
}

export default Comments;