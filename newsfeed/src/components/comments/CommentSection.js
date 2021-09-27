import React from "react"
import AddComment from "./AddComment"
import Comment from "./Comment"

const CommentSection = ({ setPosts, id, comments }) => {
  return (
    <>
      <AddComment addComment={setPosts} id={id} />
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </>
  )
}

export default CommentSection
