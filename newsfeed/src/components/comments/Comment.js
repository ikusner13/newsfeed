import React from "react"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import { faHeart, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import CommentOptions from "./CommentOptions"

const commentOptionsList = [
  {
    text: " 0 Likes",
    icon: null,
  },
  {
    text: "Like",
    icon: faHeart,
  },
  {
    text: "Edit",
    icon: faEdit,
  },
  {
    text: "Delete",
    icon: faTrash,
  },
]

// displays profile picture with comment card
const Comment = ({ comment }) => {
  return (
    <div className="d-flex flex-row mt-3 w-100">
      <Image
        src="avatar.png"
        style={{ width: "40px", height: "40px", justifyContent: "center" }}
        alt="profile"
        roundedCircle
        className="me-4 my-auto"
      />
      <Card
        className="w-100"
        style={{
          borderRadius: "15px",
          backgroundColor: "#D3DDE7",
        }}
      >
        <Card.Body className="d-flex flex-column ">
          <div className="d-flex justify-content-between comment-user">
            <h4 className="mb-0" style={{ color: "black" }}>
              Ian Kusner
            </h4>
            <div>11 minutes ago</div>
          </div>
          <div style={{ color: "blue" }}>Professional-Student</div>
          <div style={{ color: "black" }}>{comment.text}</div>
        </Card.Body>
        <Card.Body className="pt-0">
          <div className="d-flex flex-row">
            <CommentOptions options={commentOptionsList} />
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Comment
