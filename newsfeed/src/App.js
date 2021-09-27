import React, { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NewPost from "./components/NewPost"
import Container from "react-bootstrap/Container"
import Post from "./components/posts/Post"

const defaultPosts = [
  {
    id: 1,
    post: "Testing the new posts / comments",
    likes: 0,
    comments: [
      {
        text: "This is what a comment looks like!",
        likes: 0,
      },
    ],
  },
]
function App() {
  const [userPosts, setUserPosts] = useState(defaultPosts)
  return (
    <Container className="d-flex flex-column align-items-center">
      <NewPost addPost={setUserPosts} />
      {userPosts.map((post) => (
        <Post post={post} setPosts={setUserPosts} />
      ))}
    </Container>
  )
}

export default App
