import React from "react"
import AddComment from "./AddComment"
import CommentList from "./CommentList"

const CommentSection = ({ setPosts, id, comments }) => {
  return (
    <>
      <AddComment addComment={setPosts} id={id} />
      <CommentList comments={comments} />
    </>
  )
}

export default CommentSection
