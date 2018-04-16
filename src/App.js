import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment';
import Comments from './Comments';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: {
       
      }
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.postNewComment = this.postNewComment.bind(this)

  }

  postNewComment(comment) {
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
        <NewComment postNewComment={this.postNewComment} />
        <Comments comments={this.state.comments} />
      </div>
    )
  }
}

export default App
