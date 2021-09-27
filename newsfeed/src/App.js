import React, { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NewPost from "./components/NewPost"
import PostList from "./components/posts/PostList"
import Container from "react-bootstrap/Container"

const defaultPosts = [
  {
    id: 1,
    post: "Testing the new posts / comments",
    likes: 0,
    comments: [
      {
        text: "This is what a comment looks like!",
      },
    ],
  },
]
function App() {
  const [userPosts, setUserPosts] = useState(defaultPosts)
  return (
    <Container className="d-flex flex-column align-items-center">
      <NewPost addPost={setUserPosts} />
      <PostList posts={userPosts} setPosts={setUserPosts} />
    </Container>
  )
}

export default App
