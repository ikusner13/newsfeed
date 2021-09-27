import React, { useState } from "react"
import { Form } from "react-bootstrap"
import Image from "react-bootstrap/Image"

// profile picture and text area to enter comment
const AddComment = ({ addComment, id }) => {
  const [comment, setComment] = useState("")
  const handleChange = (e) => {
    setComment(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // prevents 'enter' key spam
    if (!comment) return
    addComment((prev) =>
      prev.map((data) =>
        data.id === id
          ? {
              ...data,
              comments: [...data.comments, { text: comment, likes: 0 }],
            }
          : data
      )
    )
    setComment("")
  }
  return (
    <Form className="d-flex mt-3" onSubmit={handleSubmit}>
      <Image
        src="avatar.png"
        style={{ width: "40px" }}
        alt="profile"
        roundedCircle
        className="me-4"
      />
      <Form.Control
        type="text"
        placeholder="Add a comment"
        style={{
          border: "1px solid black",
          borderRadius: "40px",
          backgroundColor: "inherit",
        }}
        value={comment}
        onChange={handleChange}
      />
    </Form>
  )
}

export default AddComment
