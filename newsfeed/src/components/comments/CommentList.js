import React from "react"
import Comment from "./Comment"

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => {
        return <Comment comment={comment} key={index} />
      })}
    </div>
  )
}

export default CommentList
