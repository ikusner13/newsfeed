import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import ActionButtons from "./ActionButtons"
import UserCommentDetails from "./UserCommentDetails"
import CommentSection from "../comments/CommentSection"

// post on newsfeed. including comments
const Post = ({ post, setPosts }) => {
  const [showComments, setShowComments] = useState(false)
  const [toggleLiked, setToggleLiked] = useState(false)
  const handleLikes = () => {
    setToggleLiked((prev) => !prev)
    setPosts((prev) =>
      prev.map((data) =>
        data.id === post.id
          ? { ...data, likes: toggleLiked ? data.likes - 1 : data.likes + 1 }
          : data
      )
    )
  }
  const handleCommentClick = () => {
    setShowComments((prev) => !prev)
  }
  return (
    <Card className="w-100">
      <Card.Body className="d-flex pb-0">
        <Image
          src="avatar.png"
          style={{ width: "50px", height: "50px" }}
          alt="profile"
          roundedCircle
          className="me-2"
        />
        <UserCommentDetails />
      </Card.Body>
      <Card.Body className="pt-0">
        <Card.Text>{post.post}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text className="d-flex flex-row">
          <span>{post.likes} Likes</span>
          <span className="d-flex justify-content-center align-items-center mx-1">
            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "4px" }} />
          </span>
          <span>{post.comments.length} Comments</span>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted ">
        <ActionButtons
          toggleLiked={toggleLiked}
          handleCommentClick={handleCommentClick}
          handleLikes={handleLikes}
        />
        {showComments && (
          <CommentSection
            setPosts={setPosts}
            id={post.id}
            comments={post.comments}
          />
        )}
      </Card.Footer>
    </Card>
  )
}

export default Post
