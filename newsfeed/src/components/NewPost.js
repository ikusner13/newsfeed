import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"
import Image from "react-bootstrap/Image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons"
import { Form } from "react-bootstrap"

// component for making new posts to the newsfeed
const NewPost = ({ addPost }) => {
  const [post, setPost] = useState("")

  const handleInput = (e) => {
    setPost(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addPost((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        post: post,
        likes: 0,
        comments: [],
      },
    ])
    setPost("")
  }
  return (
    <Card className="w-100">
      <Form onSubmit={handleSubmit}>
        <Card.Body className="d-flex mb-5 ">
          <Image
            src="avatar.png"
            style={{ width: "50px" }}
            alt="profile"
            roundedCircle
            className="me-1"
          />
          <FormControl
            type="text"
            placeholder="What is on your mind"
            style={{ border: "none" }}
            value={post}
            onChange={handleInput}
          />
        </Card.Body>
        <hr className="m-0" />
        <Card.Body className="d-flex justify-content-between">
          <Button style={{ borderRadius: "40px" }} variant="dark">
            <FontAwesomeIcon className="me-1" icon={faPhotoVideo} />
            Photo / Video
          </Button>
          <Button type="submit" disabled={!post}>
            Post It
          </Button>
        </Card.Body>
      </Form>
    </Card>
  )
}

export default NewPost
