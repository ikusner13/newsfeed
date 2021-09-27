import React from "react"
import Post from "./Post"
const PostList = ({ posts, setPosts }) => {
  return (
    <>
      {posts.map((post, index) => {
        return <Post key={index} post={post} setPosts={setPosts} />
      })}
    </>
  )
}

export default PostList
