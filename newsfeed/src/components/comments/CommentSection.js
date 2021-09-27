import React from "react"
import AddComment from "./AddComment"
import Comment from "./Comment"

const CommentSection = ({ setPosts, id, comments }) => {
  return (
    <>
      <AddComment addComment={setPosts} id={id} />
      <div className="d-flex flex-column-reverse w-100">
        {comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </div>
    </>
  )
}

export default CommentSection
