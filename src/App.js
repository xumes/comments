import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment';
import Comments from './Comments';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: {},
      isLoggedIn: false,
      user: {}
    }

    this.props.auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true, user })
        console.log('facebook user', user)
      } else {
        this.setState({ isLoggedIn: false, user: {} })
      }
    })

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.postNewComment = this.postNewComment.bind(this)

  }

  auth(provider) {
    this.props.auth.signInWithPopup(this.props.providers[provider])
  }

  postNewComment(comment) {
    const { uid, displayName, email } = this.state.user

    comment.user = {
      uid,
      name: displayName,
      email
    }
    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm=${timestamp}`] = comment
    this.setState({
      comments
    })
  }

  render() {
    return (
      <div className="container">
        {
          this.state.isLoggedIn &&
          <div>
            <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
            {this.state.user.displayName}
            <button onClick={() => this.props.auth.signOut()}>Deslogar</button>
            <NewComment postNewComment={this.postNewComment} />
          </div>
        }
        {!this.state.isLoggedIn && <div className='alert alert-info'><button onClick={() => this.auth('facebook')} className='btn btn-info'> Login with Facebook</button></div>}
        <Comments comments={this.state.comments} />
      </div>
    )
  }
}

export default App
